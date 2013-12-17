//custom js code


$( document ).ready( function() {

    //this is added so that I can hijack clicks and use ajax instead
    $("a").toggleClass("click");

    //this captures any clicks on links
    $(document).on("click", ".click", function() {
        
        loadpage($(this).attr("href"));
        return false;//disables navigation to the new page
    });

    //attempt to get the back button to work
});

function loadpage(dest) {
    // add logic to get rid of the # symbol at the beginning
    $.ajax({
        type: "GET",
        data: "page="+dest,
        url: "/ajax/content.php",
        success: function(data) { //if there is a successful reply
            //this is where the content is loaded
            $("#content").html(data);
            $("#title").html(dest);
            var stateObj = { foo: "." };
            history.pushState(stateObj, "unknown", dest);
            //TODO figure out how to add history to avax calls
        }
    });
    return 0;
}
