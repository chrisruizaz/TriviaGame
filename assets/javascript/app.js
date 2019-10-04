console.log("I am attached");
//
//Global variable
var currentQuestion = 0;
var intervalId;
var clockRunning = false;
var time = 30;
const queryURL =
  "https://api.giphy.com/v1/gifs/search?api_key=SBDVZzF2iQmWatKX1P3LaBWWkEjJnb7D&q=game of thrones&limit=25&offset=0&rating=G&lang=en";

var myQuestions = [
  {
    question: "What house does John Snow belong too?",
    correct_answer: "C Targaryen",
    choices: ["A Stark", "B Lannister", "C Targaryen", "D Tyrell"],
    questionGif:
      "https://media1.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy.gif?cid=6ed228c7e0e20476689b17da661c1479cd703fcd3033bb20&rid=giphy.gif"
  },
  {
    question: "Who does Arya Stark Marry?",
    correct_answer: "D None of the Above",
    choices: [
      "A Ramsey Bolton",
      "B Petyr Baelish",
      "C Gendry Baratheon",
      "D None of the Above"
    ],
    questionGif:
      "https://media2.giphy.com/media/FVaWjtkT6eMb6/giphy.gif?cid=6ed228c7e0e20476689b17da661c1479cd703fcd3033bb20&rid=giphy.gif"
  },
  {
    question: "How does the Night King die?",
    correct_answer: "C Arya's Dagger (Catspaw)",
    choices: [
      "A Drogon's fire",
      "B John Snow's Long Claw",
      "C Arya's Dagger (Catspaw)",
      "D Samwell Tarly's Dragonglass"
    ],
    questionGif:
      "https://media1.giphy.com/media/3o7btURiPqGSeg6IUM/giphy.gif?cid=6ed228c7e0e20476689b17da661c1479cd703fcd3033bb20&rid=giphy.gif"
  },
  {
    question: "Which Dragon is not one of Daenerys's Dragon?",
    correct_answer: "B Dracarys",
    choices: ["A Viserion", "B Dracarys", "C Drogon", "D Rhaegal"],
    questionGif:
      "https://media0.giphy.com/media/1vRCeaHbgATwA/giphy.gif?cid=6ed228c7e0e20476689b17da661c1479cd703fcd3033bb20&rid=giphy.gif"
  },
  {
    question: "Who kills Gregor Clegane?",
    correct_answer: "A Sandor Clegane",
    choices: [
      "A Sandor Clegane",
      "B Oberyn Martell",
      "C Maester Qyburn",
      "D Arya Stark"
    ],
    questionGif:
      "https://media3.giphy.com/media/JxlrNZzprrRhm/giphy.gif?cid=6ed228c7e0e20476689b17da661c1479cd703fcd3033bb20&rid=giphy.gif"
  }
];
//Load questions when start button clicked
window.onload = function() {
  $("#start").on("click", start);
};

//Next question function
function nextQuestion() {
  //is the game over
  if (currentQuestion < myQuestions.length && currentQuestion > 0) {
  }
  //You beat the quiz
  if (currentQuestion === myQuestions.length) {
    setTimeout(function() {
      var youWin =
        "https://media2.giphy.com/media/3oEjI7esR4E8L1UhhK/giphy.gif?cid=6ed228c7ea93101a0474375ddba2492c0cf17b7f7cc20c86&rid=giphy.gif";
      setTimeout(function() {
        alert("You Win");
        window.location.reload();
      }, 500);
      $("#cardImg").attr("src", youWin);
    }, 3000);
    clockRunning = false;
    return;
  }

  //Accessing objects
  var presentQuestion = myQuestions[currentQuestion];
  $(".card-title").text(presentQuestion.question);
  console.log(presentQuestion);
  //Loop over question choices
  for (var i = 0; i <= presentQuestion.choices.length; i++) {
    $(`.Question-${i}-label`).text(presentQuestion.choices[i]);
  }
}
//checking answers using radios!
$("#inline_content input[name='exampleRadios']").click(function() {
  var value = $("input:radio[name=exampleRadios]:checked").val();
  var presentQuestion = myQuestions[currentQuestion];
  var userInput = $(`.Question-${value}-label`).text();
  console.log(userInput);
  //correct answer next question function
  if (userInput === presentQuestion.correct_answer) {
    var thatsRight = presentQuestion.questionGif;
    $("#cardImg").attr("src", thatsRight);
    currentQuestion += 1;
    nextQuestion();
  } else if (userInput != presentQuestion.correct_answer) {
    //wrong answer display gif
    var wrongAnswer =
      "https://media2.giphy.com/media/SRwH5w22ttzlpyCrCv/giphy.gif?cid=6ed228c7ea93101a0474375ddba2492c0cf17b7f7cc20c86&rid=giphy.gif";
    $("#cardImg").attr("src", wrongAnswer);
    setTimeout(function() {
      alert("You Lose");
      window.location.reload();
    }, 1000);
  }
});
//Start function display question, choices, and display time
function start() {
  $("#display").text("00:30");
  $("label").css("color", "red");
  nextQuestion();

  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}
//Time count and display
function count() {
  time--;
  var converted = timeConverter(time);
  //
  console.log(converted);
  //Change time
  //
  $("#display").text(converted);
  if (time == 0) {
    clockRunning = false;
    var timeupGif =
      "https://media1.giphy.com/media/bpm2ROOcuIG7C/giphy.gif?cid=6ed228c7e0e20476689b17da661c1479cd703fcd3033bb20&rid=giphy.gif";
    $("#cardImg").attr("src", timeupGif);
    setTimeout(function() {
      alert("Times Up!");
      window.location.reload();
    }, 1000);
  }
}
//
//Time Function
//
function timeConverter(t) {
  //if you run out of time
  if (time <= 0) {
    clearInterval(intervalId);
  }
  //Displaying minutes and seconds
  var minutes = Math.floor(t / 60);
  var seconds = t - minutes * 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}
