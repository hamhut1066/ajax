<?php
    function disassemble($url) {
        if (function_exists($url[1])) {
            return $url[1]();
        }
        else return page_not_found($url[1]);
    }
    //defining functions ----------
    function root() { //homepage
        return "Welcome Home";
    }
    function page_not_found($x) {
        //the 404 error function
        return rendermd("content/404.md");
    }
    function test() { return "test complete"; }

?>
