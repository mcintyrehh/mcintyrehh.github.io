$(document).ready(function () {
    var hoverFace = $(".my-name-2");
    hoverFace.slideDown(3000);
    
    $(".hide").hide();
    $(".card").hover(
        function () {
            $(this).find(".card-img").css("opacity", "0.2");
            $(this).find(".hide").show();
        }, function () {
            $(this).find(".card-img").css("opacity", "1");
            $(this).find(".hide").hide();
            //   $(this).find(".movie-year").hide();
        }
    );
});




// hoverFace.css("background-image", "");
// $(".my-name").html("Henry M¢Intyre");
// $(".my-name").css("color", "whitesmoke")