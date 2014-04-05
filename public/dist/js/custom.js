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

    $("#last-scrobble").on("click", function() {
        console.log("click");
        rss("http://ws.audioscrobbler.com/3.0/user/hamhut1066/recenttracks.rss");
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
    rss("http://ws.audioscrobbler.com/3.0/user/hamhut1066/recenttracks.rss");
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
function rss(url) {
    $("#scrobbles").empty();
    $.get("http://ws.audioscrobbler.com/2.0/user/hamhut1066/recenttracks.rss", 
            function(data) { 
                recent = xmlToJson(data).rss.channel.item; 
                $("#last-scrobble").text(recent[0].title["#text"]);
                i = 0;
                recent.forEach(function(e) { 
                    title = e.title["#text"];
                    $("#scrobbles").append("<li music-id='"+i+"' data-toggle='tooltip' class='text-muted musictool' title='"+title+"'>"+title.substring(0,10)+"...</li>");
                    i+=1;
                }); 
                $('.musictool').tooltip();
            });
}
// Changes XML to JSON
function xmlToJson(xml) {
	
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};
