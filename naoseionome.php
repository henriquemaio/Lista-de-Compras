<? php
//Estão definidos nas variaveis de ambiente
        
        $host = getenv('DB_HOST'); 
        $user = getenv('DB_USER'); 
        $pass = getenv('DB_PASS'); 
        $db = getenv('DB_NAME'); 


         

        if(isset($_POST['nome'])) {
            $data = $_POST['nome'];
            echo json_encode(array('return' => $data));
        }
        
        $con_string = 'host='.$host.' port=5432 dbname='.$db.' user='.$user.' password='.$pass;
        //"host=$host port=5432 dbname=$db user=$user password=$pass"
        return $con = pg_connect($con_string)
            or die("Could not connect to server\n");


>