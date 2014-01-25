//custom js code


$( document ).ready( function() {

    //this is added so that I can hijack clicks and use ajax instead
    $("a").toggleClass("click");

    //this captures any clicks on links
    $(document).on("click", ".click", function() {
        
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
    
});

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
