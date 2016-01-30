<?php


$teste = getenv('TEST');

$db_user = getenv('DB_USER');
$db_name = getenv('DB_NAME');
$db_host = getenv('DB_HOST');
$db_pass = getenv('DB_PASS');



echo("<script>console.log('PHP: ".json_encode($teste)."');</script>");
echo("<script>console.log('PHP: ".json_encode($teste)."');</script>");

sleep(10);

header("Location: index.html");

?>
