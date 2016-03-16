$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    
    var totalWrapper = $("#totalWrapper"); 
    totalWrapper.css("display", totalWrapper.css("display") === 'none' ? '' : 'none');
    
    document.getElementById("addItem").onclick = function () {
        adicionarItem();
    };
    
    $('#bigWrapper').on('click', 'input[type=checkbox]', function () {
        if ($(this).is(":checked")) {
            $('#modal2').openModal();
            adicionarPrice($(this).next().next());
        }
    });
    
    

});

function adicionarTotal(valor) {
    
    var somaTotal = 0;
    var total = document.getElementById("totalWrapper");
    
    var items = document.querySelectorAll(".price");
    var valorUm = 0;
    
    for (var i = 0; i < items.length; i++) {
        valorUm = parseFloat(items[i].innerHTML.replace("€ ", ""));
        console.log(valorUm);
        somaTotal += valorUm;
    }
    
    if (somaTotal > 0) {
        
        total.innerHTML = "Total: " + (formatarMoeda(parseFloat(somaTotal)))  ;
    }
    
    else {
        console.log("aqui deu zero");
        total.innerHTML = "Total: " + formatarMoeda(parseFloat(valor)) ;
    }
    
    
}

function adicionarPrice(priceValue) {
    document.getElementById("addPrice").onclick = function () {
        var coiso = document.getElementById("itemPrice").value;
        priceValue.text(formatarMoeda(coiso));
        adicionarTotal(parseFloat(coiso));
        
        
        if ($("#totalWrapper").css("display") == 'none'){
            $("#totalWrapper").toggle();
        }
        
        console.log(priceValue);
        priceValue[0].style.display = 'block';
        
    }; 
    
}

function formatarMoeda(coiso) {
    return "€ " + parseFloat(coiso).toFixed(2);
}

function adicionarItem() {
    var wrapper = document.createElement("span");
    wrapper.className = "item valign-wrapper";

    var item = document.createElement("div");
    item.className = "item-component valign";
    wrapper.style.backgroundColor = getRandomColor();
    document.body.style.backgroundColor = getRandomColor();

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "testeUm";
    checkbox.id = document.getElementById("itemName").value;

    var label = document.createElement("label");
    label.setAttribute("for", document.getElementById("itemName").value);
    label.innerHTML = document.getElementById("itemName").value; 

    var price = document.createElement("div");
    price.className = "price";
    price.innerHTML = "0";
    
    var data = {};
    data.nome  =  document.getElementById("itemName").value; //Nome do item que sera adicionado ao banco
    console.log(data);
    //Enviar o dado para o Php
    $.post("../naoseionome.php",data ,function (result){
        
        console.log(result);
    },"json");

    item.appendChild(checkbox);
    item.appendChild(label);
    item.appendChild(price);
    wrapper.appendChild(item);

    var bigWrapper = document.getElementById("bigWrapper");

    bigWrapper.appendChild(wrapper);



}

function getRandomColor() {
    var colors = ["f44336", "E91E63", "9C27B0", "673AB7", "3F51B5", "2196F3", "03A9F4", "00BCD4", "009688", "4CAF50", "8BC34A", "CDDC39", "FFEB3B", "FFC107", "FF9800", "FF5722", "795548", "9E9E9E", "607D8B"];

    var index = $("#bigWrapper > span").length % 19;

    var color = '#';
    color = color.concat(colors[index]);

    return color;
}

/*
Ir no Heroku, depois em Resources e adicionar o Postgres. Clicando nele terei acesso a todas as informações.

Baixar o Postgres admin para gerenciar e visualizar o banco.

Abrir o Posgres admin e adicionar na tomadinha as informações lá do heroku postgres. DB é o DB, não o services.

Em seguida, abrir as databases e procurar a única sem o X.

Abrir e ir em Tabelas, clicar com botão direito dela e nova tabela.

Colocar um nome na tabela, tipo público e ir em Colunas. Adicionar nova coluna.
Valor padrão de tamanho para strings é 255.

Adicionar o preço com double

Adicionar o ID como integer e marcar not null.
Depois ir em Constrains, Colocar nome ID e ir em Columns. Adicionar a columa de ID.
*/