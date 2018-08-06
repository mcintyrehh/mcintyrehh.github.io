$(document).ready(function () {
    
    var hoverFace = $(".my-name");
    
    hoverFace.slideDown(3000);
    
    function removeFace() {
       hoverFace.slideUp(3000);
       $(".my-name-2").slideDown(3000);
    }
    // hoverFace.attr("background-color", "#111");
    window.setTimeout(removeFace, 4000);
});


// hoverFace.css("background-image", "");
// $(".my-name").html("Henry M¢Intyre");
// $(".my-name").css("color", "whitesmoke")