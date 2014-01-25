<?php
$uri =  $_SERVER['REQUEST_URI'];
if ($uri == "/") {    header( 'Location: /home.md' ) ; }
require("../common/master.php");
?>
