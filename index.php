<?php
header("Location: index.html");

$teste = getenv('TEST');

echo("<script>console.log('PHP: ".json_encode($teste)."');</script>");

?>
