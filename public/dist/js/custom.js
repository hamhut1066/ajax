//custom js code
var jenni;
$( document ).ready( function() {
    //this is a simple function that fixes the dropdown from staying open
    $(".note").on("click", function() {
        $(".modal-title").text(this.innerHTML);
        $(".modal-body").html("loading...");
        notes.getNote(this.innerHTML);
        $("#myModal").modal();
    });
    $(".dropdown-menu").on("mouseleave", function() {
        $(this).closest("li").removeClass("open active");
    });

    $("#last-scrobble").on("click", function() {
        jenni = rss("http://ws.audioscrobbler.com/3.0/user/hamhut1066/recenttracks.rss");

    });


    //a simple function for going back on the website
    rss("http://ws.audioscrobbler.com/3.0/user/hamhut1066/recenttracks.rss");
});

function rss(url) {
    $("#scrobbles").empty();
    return $.get("http://ws.audioscrobbler.com/2.0/user/hamhut1066/recenttracks.rss", 
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
