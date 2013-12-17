<!DOCTYPE html>
<html lang="en">

  <body>

    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">Ajax</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="/home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>

    <div class="container">

      <div class="starter-template">
        <h1>Ajax Site</h1>
        <p class="lead">Welcome to <?php echo $uri ?></p>
      </div>
<div id="main" class="container clear-top">
<div class="row">
<div class="col-xs-2">
<!-- I can now add random things in here If I feel so inclined -->
<p>chat client could be added here</p>
</div>
<div class="col-xs-8 hidden-phone">
<span id="content">
<!--the content of the page -->
</span>
</div>
<div class="col-xs-2">
</div>
</div>
</div>
</div>
</div>

    </div><!-- /.container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="/dist/js/jquery.js"></script>
    <script src="/dist/js/bootstrap.min.js"></script>
    <script src="/dist/js/custom.js"></script>
  </body>
</html>

