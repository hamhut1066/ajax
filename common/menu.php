    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand local" href="/home.md"><?php echo $heading; ?></a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li ><a class="local" href="/feed">Feed</a></li>
            <li ><a class="local" href="/notes">Notes</a></li>
        <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a class="local" href="#">Action</a></li>
                <li><a class="local" href="/notes/work.md">Uni Work</a></li>
                <li class="divider"></li>
              </ul>
            </li>
            <li class="">
            <a href="#"><span id="last-scrobble"></span></a>
            </li>
          </ul>
        </ul>
        </li><!-- drop down -->
        </div><!--/.nav-collapse -->
      </div>
    </div>

