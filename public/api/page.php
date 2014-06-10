<?php
define('PATH_TO_WEBROOT', "/srv/ajax/common");
define('PATH_TO_CONTENT', "/srv/ajax/content");

#TODO add checking here to stop any malicious code injection


require(PATH_TO_WEBROOT.'/Parsedown.php');
require(PATH_TO_WEBROOT.'/helpers.php');

#this php file gets and parses the page into a readable format
#require("../../common/Parsedown.php"); #include markdown parsing class
#retrieve dest from get
$uri  = $_GET["page"];

$result = rendermd($uri);
$title = heading($uri);

$return = '{"content": "'.$result.'", "title": "'.$title.'"}';
$return = preg_replace('~[\r\n]+~', '', $return); #stripping newlines is necessary for javascript
echo $return;
?>
