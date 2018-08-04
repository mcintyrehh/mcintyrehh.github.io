$(document).ready(function () {

    var hoverFace = $(".my-name");
    $(".my-name").css("background-image","url(\"assets/images/HenryProf.jpg\")");
    function removeFace() {
        hoverFace.css("background-image", "");
    }
    // hoverFace.attr("background-color", "#111");
    window.setTimeout(removeFace, 2000);
});