<?php
#this file contains helpers that will abstract away some of the work so that 
#updating is easy

function rendermd($uri) {
    $text = "";
    $result = "";
    try {
        if (strpos($uri,".") != FALSE){
            $text = file_get_contents(PATH."/$uri");
        }
        if ($text == "") {throw new Exception("");};
    }catch (Exception $e) {
        $text = file_get_contents(PATH."/home.md");
    }
    $result = Parsedown::instance()->parse($text);
    return $result; #$result;
}

function heading($uri) {
    $x = explode("/", "$uri");

    if(sizeof($x) == 2 and $x[1] == "") {
        //root directory
        return "Home";
    }
    else { return ucwords($x[1]); }
}
