<?php
$uri =  $_SERVER['REQUEST_URI'];
echo $uri;
if ($uri == "/") {    header( 'Location: /home.md' ) ; }
require("../common/master.php");
?>
