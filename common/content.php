<?php
    require('routes.php');
    $x = explode("/","$uri");
    
    //if we're at the root directory
    if(sizeof($x) == 2 and $x[1] == "") {
        //root directory
        echo root();
    }
    else { echo disassemble($x); }
?>
