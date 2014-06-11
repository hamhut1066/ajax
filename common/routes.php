<?php
    function disassemble($url) {
       return $url[1]();
    }
    //defining functions ----------
    function root() { //homepage
        return "Welcome Home";
    }
    function test() { return "test complete"; }

?>
