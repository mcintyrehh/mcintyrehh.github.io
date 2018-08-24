$(document).ready(function () {
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
//array with an element for each line printd
var contactArray = ["let contact = {", "intro: \"I\'d love to hear from you\",", "strangers: \"say hi\",", "friends: \"hurl an insult\",", "recruiters: \"send job offers!\"", "}"]
console.log(contactArray);
var caption = $("#caption");
//declaring iterators for index of individual elements, and the elements themselves
var i = 0;
var index = 0;
var currentWord = contactArray[index];
//as long as i is within the word, append the letter at this place and move to the next letter
function typeWriter() {
    if (i < currentWord.length) {
        caption.append(currentWord.charAt(i))
        i++;
    }
    //once the whole line has been printed, reset i, move to next element
    else {
        i = 0;
        index++
        currentWord = contactArray[index];
        if (index === 5) {
            caption.append("<br />} <span class=\"blink\">▓<span>");
            setInterval(blink, 400);
            // console.log(currentWord);
            stopFunction();
            return;
        }
        else {
            caption.append("<br /> &nbsp &nbsp &nbsp &nbsp");
            console.log(currentWord);
        }
        //exit and stop the interval once all elements have been displayed
        if (index === contactArray.length) {
            console.log("breaking here");
            stopFunction();
            return;
        }

    }
}
//appends a letter ia typeWriter every 150ms
var interval = setInterval(typeWriter, 150)
//callback function to clear the interval once line is completed
function stopFunction() {
    clearInterval(interval);
}
//ternary operator would be better here, but if opacity is 0, makes it 1 and if 1, makes it 0
//blinking animation for the cursor
function blink() {
    var pipe = $(".blink");
    if (pipe.css("opacity") == 1) {
        pipe.css("opacity", 0)
    }
    else {
        pipe.css("opacity", 1);
    }
}
//grab the user inputs on clicking submit
$(".submit").on("click", function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    console.log("Name: " + name);
    console.log("email: " + email);
    console.log("message: " + message);
})