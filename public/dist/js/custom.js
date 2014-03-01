//custom js code
$( document ).ready( function() {

    //this is added so that I can hijack clicks and use ajax instead
    //$(".local").addClass("click");
    $("#station-name").removeClass("click");

    //this captures any clicks on links
    $(document).on("click", ".local", function() {
        
        loadpage($(this).attr("href"));
        $("a").parent().removeClass("active");
        $(this).parent().toggleClass("active");
        return false;//disables navigation to the new page
    });

    //this is a simple function that fixes the dropdown from staying open
    $(".dropdown-menu").on("mouseleave", function() {
        $(this).closest("li").removeClass("open active");
    });


    //a simple function for going back on the website

    $(window).bind('popstate', function(event) {
        var state = event.originalEvent.state;
        if(state !== null){
            if(state.url !== undefined){
                loadpage(state.url);
            }
        }
    });
    
    //start of radio controlled stuff
    $(".station").click( function() {
        //set new channel!!
        var a = $(this).find("a")
        var station = a.attr("station-id");
        changeSrc(station);
        var name = a.text();
        $("#station-name").text(name);
        $("#station-name").removeClass("disabled");
    });
    $("#station-name").click( function() {
        $(this).toggleClass("btn-info");
        var audio = $("#radio");
          if (audio[0].paused == false) {
                audio[0].pause();
            } else {
                audio[0].play();
            }
        //console.log("click");
    });
    rss("http://ws.audioscrobbler.com/2.0/user/hamhut1066/recenttracks.rss",meh);
});
function changeSrc(sourceUrl) {
        var audio = $("#radio");      
        $("#ogg_src").attr("src", sourceUrl);
        /****************/
        audio[0].pause();
        audio[0].load();//suspends and restores all audio element
        audio[0].play();
        $("#station-name").addClass("btn-info");
        /****************/
}

function loadpage(dest) {
    // add logic to get rid of the # symbol at the beginning
    if(dest == "#") { return 0; }
    $.ajax({
        type: "GET",
        data: "page="+dest,
        url: "/ajax/content.php",
        success: function(data) { //if there is a successful reply
            //this is where the content is loaded
            obj = JSON.parse(data);
            //$("#content").html(data);
            $("#content").html(obj.content);
            $("#title").html(obj.title);
            history.pushState({url: dest} , "unknown", dest);
            //TODO figure out how to add history to ajax calls
        }
    });
    return 0;
}
function rss(url, callback) {
        $.ajax({
                url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
            dataType: 'json',
            success: function(data) {
                    callback(data.responseData.feed);
                        }
        });
}
function meh(data) {
    console.log(data);
    $("#last-scrobble").text(data.entries[0].title);
    for (var i = 0; i < data.entries.length; i++) {
    $("#scrobbles").append("<li class='text-muted'>"+data.entries[i].title.slice(0,10)+"...</li>");
    }
}
