$(document).ready(function () {
    $(".hide").hide();
    $(".card").hover(
        function () {
            $(this).find(".card-img").css("opacity", "0.2");
            $(this).find(".hide").show();
        }, function () {
            $(this).find(".card-img").css("opacity", "1");
            $(this).find(".hide").hide();
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
//making sure it only plays one time
var hasPlayed = false;
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
console.log($(".contact-animation").offset().top);
$(window).on("scroll", function() {
    if (!hasPlayed &&  $(".contact-animation").offset().top < 100);
    console.log("*****NOICE*****");
})
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
$(".submit").on("click", function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    console.log("Name: " + name);
    console.log("email: " + email);
    console.log("message: " + message);
})

//array of objects for easily adding new ones
var projects = [
    // {
    //     name: "Hangman",
    //     about: "My first JavaScript project!",
    //     techUsed: "JavaScript, HTML, CSS",
    //     link: "https://mcintyrehh.github.io/Word-Guess-Game/",
    //     img: "assets/images/hangmancrop.jpg"
    // },
    // {
    //     name: "RPG Game",
    //     about: "jQuery web game with dynamically updated HTML",
    //     techUsed: "jQuery, Bootstrap, HTML, CSS",
    //     link: "https://mcintyrehh.github.io/unit-4-game/",
    //     img: "assets/images/raccoon2.jpg"
    // },
    {
        name: "Science Trivia",
        about: "JavaScript based trivia game",
        techUsed: "JS objects, timeout functions, embedded gifs",
        link: "https://mcintyrehh.github.io/unit-4-game/",
        img: "assets/images/science.png"
    },
    {
        name: "¿Rick or Jerry?",
        about: "Silly clone of the trivia game",
        techUsed: "JS objects, timeout functions, embedded gifs",
        link: "https://mcintyrehh.github.io/RickJerryQuiz/",
        img: "assets/images/RickJerry.jpg"
    },
    {
        name: "Rap Gif",
        about: "First project using APIs",
        techUsed: "Dynamically created API calls based on user input",
        link: "https://mcintyrehh.github.io/RapGif/",
        img: "assets/images/tacos.gif"
    },
    // {
    //     name: "Train Brain",
    //     about: "FireBase Train scheduler App",
    //     techUsed: "Firebase, moment.js",
    //     link: "https://mcintyrehh.github.io/Brain-Train/",
    //     img: "assets/images/escape-flight.png"
    // },
    // {
    //     name: "Pic-Me-Up",
    //     about: "Group project, in development",
    //     techUsed: "(API keys have expired)",
    //     link: "",
    //     img: "assets/images/tempsnip.png"
    // },
    // {
    //     name: "LIRI",
    //     about: "Command line node.js app to display Tweets, movie, and song info",
    //     techUsed: "node.js, npm, OMDb, Twitter, Spotify APIs",
    //     link: "https://github.com/mcintyrehh/liri-node-app",
    //     img: "assets/images/node.png"
    // },
    {
        name: "Bamazon",
        about: "MySQL & Inquirer based Node.js command line warehouse/inventory app",
        techUsed: "node.js, MySQL, Inquirer, easy-table, ",
        link: "https://github.com/mcintyrehh/bamazon",
        img: "assets/images/bamazon.jpg"
    },
    {
        name: "Adversario",
        about: "Find your perfect Archenemy with this nemesis matching app powered by:",
        techUsed: "Express, Node.js, and Heroku",
        link: "https://calm-inlet-70591.herokuapp.com/",
        img: "assets/images/Adversario.jpg"
    },
    {
        name: "Hank's Burgers",
        about: "Burger logger with a homemade ORM, following the MVC design pattern",
        techUsed: "MySQL, Node.js, Express, Handlebars, Jaws DB, Heroku",
        link: "https://calm-atoll-38312.herokuapp.com/",
        img: "assets/images/hanksburgers.png"
    },
    {
        name: "Mongo Unchained",
        about: "Proof of concept practice with noSQL databases and website scraping",
        techUsed: "MongoDB, Mongoose, Cheerio, Axios, Heroku",
        link: "https://mongo-unchained.herokuapp.com/",
        img: "assets/images/mongo-unchained.png"
    }

]
//for each object in the array, make a card!
projects.forEach(function (element) {
    project(element);
})
function project(projObj) {
    $(".posters").append(
        `<div class="col- card m-2 bg-dark text-center text-white proj-card">
        <img class="card-img" src=${projObj.img} alt="${projObj.name} pic">
            <div class="card-img-overlay d-flex flex-column justify-content-end hover-text">
                <h5 class="card-title card-name hide">${projObj.name}</h5>
                <p class="card-text hide">${projObj.about}</p>
                <p class="card-text col-small hide">${projObj.techUsed}</p>
                <a class="btn btn-success hide" href=${projObj.link} target="_blank">Check it out!</a>
            </div>
     </div>`)
}