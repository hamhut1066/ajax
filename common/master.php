<!DOCTYPE html>
<?php
#includes up at the top so they are easy to find
#and global variables
define(COMMON, "/srv/ajax/common");
require('config.php');
require('Parsedown.php');
require('helpers.php');
?>
<html lang="en">
    <?php require('header.php'); ?>
  <body>
    <a id="top" ref="#"></a>
    <?php require('menu.php'); ?>

<div id="main" class="container clear-top">
      <div class="hidden-print starter-template">
      <h1><?php echo $heading; ?></h1>
      <p class="text-muted lead"><?php echo $lead; ?></p>
      </div>
<div class="row">
<div class="col-xs-2">
<div class="hidden-print">
<!-- I can now add random things in here If I feel so inclined -->
<p>>.<</p>
</div>
</div>
<div class="col-xs-8">
<span id="content">
<!--the content of the page -->
<?php
    echo rendermd($uri);
?>
</span>
</div>
<div class="col-xs-2">
<script src="http://workinstartups.com/api/api.php?action=getJobs&type=parttime&category=0&count=10&random=0&days_behind=0&response=json&city=81"   type="text/javascript"></script> <script type="text/javascript">showJobs('jobber-container', 'jobber-list');</script>
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
