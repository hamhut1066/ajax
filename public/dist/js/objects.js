//random objects
var notes = {
    getNote: function(fname) {
        $.ajax({
            url: "/api/page.php",
            data: {page: fname}
            }).done(function(msg) {
                var tmp = JSON.parse(msg);
                $(".modal-body").html(tmp.content);
            });
    }
};
