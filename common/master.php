<!DOCTYPE html>
<?php
   #includes up at the top so they are easy to find
   #and global variables
   //define('COMMON', "/srv/ajax/common");
   require('config.php');
   require('Parsedown.php');
   require('helpers.php');
   ?>

<html lang="en">
<div id="myModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Modal title</h4>
            </div>
            <div class="modal-body">
                <p>Body</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary btn-default" data-dismiss="modal">Close</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
  <?php require('header.php'); ?>
  <body>
    <a id="top" ref="#"></a>
    <?php require('menu.php'); ?>

    <div id="main" class="container clear-top">
      <div class="hidden-print starter-template">
	<h1><?php echo heading; ?></h1>
	<p class="text-muted lead"><?php echo lead; ?></p>
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
	    <?php require('content.php'); ?>
        <!--end content -->
	  </span>
	</div>
	<div class="col-xs-2 hidden-print">
	  <!-- scrobbles -->
	  <a href="http://www.last.fm/user/hamhut1066" target="_blank"><span class="text">Latest Scrobbles</span></a>
	  <ul id="scrobbles"></ul>
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
