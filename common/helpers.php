<?php
#this file contains helpers that will abstract away some of the work so that 
#updating is easy

function rendermd($uri) {
    $text = file_get_contents(PATH_TO_CONTENT."/static$uri");
    if ($text == ""){ $text = file_get_contents(PATH_TO_CONTENT."/404.md"); } 
    $result = Parsedown::instance()->parse($text);
    return $result;
}

#TODO add functionality to use the filename if no name is specified
function heading($uri) {
    $f = fopen(PATH_TO_CONTENT."/static$uri", 'r');
    $line = fgets($f);
    fclose($f);
    list($prefix, $title) = explode(": ", $line);
    return $title;
}
