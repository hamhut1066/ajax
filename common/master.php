<!DOCTYPE html>
<?php
#includes up at the top so they are easy to find
#and global variables
define(COMMON, "/srv/ajax/common");
define('PATH_TO_CONTENT', "/srv/ajax/content");
require('Parsedown.php');
?>
<html lang="en">
    <?php require('header.php'); ?>
  <body>
    <?php require('menu.php'); ?>

<div id="main" class="container clear-top">
      <div class="starter-template">
        <h1>Ajax Site</h1>
        <p class="lead">hamish's ajax site</p>
      </div>
<div class="row">
<div class="col-xs-2">
<!-- I can now add random things in here If I feel so inclined -->
<p>chat client could be added here</p>
</div>
<div class="col-xs-8 hidden-phone">
<span id="content">
<!--the content of the page -->
<?php
    #echo PATH_TO_CONTENT."$uri";
    $text = file_get_contents(PATH_TO_CONTENT."/static$uri");
    if ($text == ""){ $text = file_get_contents(PATH_TO_CONTENT."/static/index.md"); } 
    $result = Parsedown::instance()->parse($text);
    echo $result;
?>
</span>
</div>
<div class="col-xs-2">
</div>
</div>
</div>
</div>
</div>

    </div><!-- /.container -->

    <?php require('footer.php'); ?>

    <?php require('includes.php'); ?>
  </body>
</html>
