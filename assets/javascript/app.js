console.log("I am attached");
//
//
var currentQuestion = 0;
var intervalId;
var clockRunning = false;
var time = 30;
var myQuestions = [
  {
    question: "Who does Arya Stark Marry?",
    correct_answer: "D None of the Above",
    choices: [
      "A Ramsey Bolton",
      "B Petyr Baelish",
      "C Gendry Baratheon",
      "D None of the Above"
    ]
  },
  {
    question: "What house does John Snow belong too?",
    correct_answer: "C Targaryen",
    choices: ["A Stark", "B Lannister", "C Targaryen", "D Tyrell"]
  },
  {
    question: "How does the Night King die?",
    correct_answer: "C Arya's Dagger (Catspaw)",
    choices: [
      "A Drogon's fire",
      "B John Snow's Long Claw",
      "C Arya's Dagger (Catspaw)",
      "D Samwell Tarly's Dragonglass"
    ]
  },
  {
    question: "Which Dragon is not one of Daenerys's Dragon?",
    correct_answer: "B Dracarys",
    choices: ["A Viserion", "B Dracarys", "C Drogon", "D Rhaegal"]
  },
  {
    question: "Who kills Gregor Clegane?",
    correct_answer: "A Sandor Clegane",
    choices: [
      "A Sandor Clegane",
      "B Oberyn Martell",
      "C Maester Qyburn",
      "D Arya Stark"
    ]
  }
];

//Global Variables
window.onload = function() {
  $("#start").on("click", start);
};

function nextQuestion() {
  //is the game over
  if (currentQuestion < myQuestions.length && currentQuestion > 0) {
    alert("Keep Going");
  }
  if (currentQuestion > myQuestions.length) {
    alert("You Win");
  }
  //! Accessing objects
  var presentQuestion = myQuestions[currentQuestion];
  $(".card-title").text(presentQuestion.question);
  console.log(presentQuestion);
  //! Take advantage of data structures. Loop over question.choices (an array)
  for (var i = 0; i < presentQuestion.choices.length; i++) {
    $(`.Question-${i}-label`).text(presentQuestion.choices[i]);
  }

  //checking answers
  $("#inline_content input[name='exampleRadios']").click(function() {
    var value = $("input:radio[name=exampleRadios]:checked").val();

    var userInput = $(`.Question-${value}-label`).text();
    console.log(userInput);

    if (userInput === presentQuestion.correct_answer) {
      nextQuestion(currentQuestion++);
    }
  });
}
function start() {
  $("#display").text("00:30");

  nextQuestion();

  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
    // console.log(converted);
  }
}
// $("#inline_content input[name='exampleRadios']").click(function() {
//   alert("you clicked Radio!");
//   if ($("input:radio[name=type]:checked").val() == myQuestions.correct_answer) {
//     alert($("input:radio[name=type]:checked").val());
//     //$('#select-table > .roomNumber').attr('enabled',false);
//   }
// });
//On click function for radio
//
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
  }
}
//
//Time Function
//
function timeConverter(t) {
  if (time <= 0) {
    clearInterval(intervalId);
    nextQuestion();
  }

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
