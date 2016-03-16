<?php
        //Estão definidos nas variaveis de ambiente
        //print 'entrei aqui no php naoseionome';
        $host = getenv('DB_HOST'); 
        $user = getenv('DB_USER'); 
        $pass = getenv('DB_PASS'); 
        $db = getenv('DB_NAME');
        
        $con_string = 'host='.$host.' port=5432 dbname='.$db.' user='.$user.' password='.$pass;
        
        $con = pg_connect($con_string) or die("Could not connect to server\n");

        
        if(isset($_POST['nome'])) {
            //echo("<script>console.log('Puta bruxaria do cão');</script>");
            $data = $_POST['nome'];
            $stat = pg_connection_status($con);
            $query_string = 'INSERT INTO precos (item, preco) VALUES ("'.$data.'", null);';
            $result = pg_query($con,$query_string);
            echo json_encode(array('return' => $data, 'status_db' => $stat, 'result' => $result, 'query' => $query_string, 'con_string' => $con_string));
        }
        
        
        //"host=$host port=5432 dbname=$db user=$user password=$pass"
        //echo $con_string;
        
        

?>