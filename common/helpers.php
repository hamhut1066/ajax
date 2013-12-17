<?php
#this file contains helpers that will abstract away some of the work so that 
#updating is easy
define('PATH_TO_CONTENT', "/srv/ajax/content");

function rendermd($uri) {
    $text = file_get_contents(PATH_TO_CONTENT."/static$uri");
    if ($text == ""){ $text = file_get_contents(PATH_TO_CONTENT."/static/index.md"); } 
    $result = Parsedown::instance()->parse($text);
    return $result;
}
