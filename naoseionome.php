<? php
//Estão definidos nas variaveis de ambiente
        
        $host = getenv('DB_HOST'); 
        $user = getenv('DB_USER'); 
        $pass = getenv('DB_PASS'); 
        $db = getenv('DB_NAME'); 


         

        if(isset($_POST['data'])) {
            $data = $_POST['data'];
            echo json_encode(array('return' => $data));
        }
        
        return $con = pg_connect("host=$host port=5432 dbname=$db user=$user password=$pass")
            or die("Could not connect to server\n");


>