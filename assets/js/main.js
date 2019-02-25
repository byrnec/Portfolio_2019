// on ready
$(function() {
    // project image hover listener
    $(".img-responsive").hover(
        function() {
            $(this).attr("src", $(this).data("gif"));
        }, function() {
            $(this).attr("src", $(this).data("img"));
        }
    );
});