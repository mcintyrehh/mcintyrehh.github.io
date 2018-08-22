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

var contactArray = ["let contact = {\n", "intro: \"I\'d love to hear from you\",\n", "strangers: \"say hi\",\n", "friends: \"hurl an insult\",\n", "recruiters: \"send job offers!\"\n"]
console.log(contactArray);
var i = 0;
var index = 0;
var currentWord = contactArray[index];
var text = "Testing testing testing";
var speed = 500; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    // console.log(i);
    console.log(currentWord);
    
    if (i < currentWord.length) {
        $("#caption").append(currentWord.charAt(i))
        i++;
    }
    else {
        i = 0;
        index++
        
        currentWord = contactArray[index];
        console.log(index);
        clearInterval(interval)
        setInterval(typeWriter, 500);
        if (index === contactArray.length) {
            return;
            console.log("breaking here");
            clearInterval(interval);
        }

    }
}
var interval = setInterval(typeWriter, 100)
//callback function to clear the interval once line is completed
function stopFunction() {
    clearInterval(interval);
}
// for (var i = 0; i < contactArray.length; i++) {
//     text = contactArray[i];
//     console.log(text);
//     typeWriter();
// }

// // setInterval()
