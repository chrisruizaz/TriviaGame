console.log("I am attached");
//
//
var intervalId;
var clockRunning = false;
var time = 30;
//Global Variables
window.onload = function() {
  $("#start").on("click", start);
};
function start() {
  $("#display").text("30");
  //displaying questions
  $(".card-title").text("What house does John Snow belong too?");
  $(".Question-one-label").text("Stark");
  $(".Question-two-label").text("Lannister");
  $(".Question-three-label").text("Targaryen");
  $(".Question-four-label").text("Tyrell");
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}
//How do I get my timer to stop counting down?
//How do I make my gifs pop up with "right" or "wrong" responses?
//How do I make the next questions come up in the HTML after the GIF?
//Do I need to make an Array and For Loop to hold the questions and call it with a function and index
//to populate a new question?.
//Do I need to gut most of my code to make a for loop work?

//Quiz Questions
//
//
///////////
//Who does Arya Stark Marry?
//a Ramsey Bolton
//b Petyr Baelish
//c Gendry Baratheon
//d None of the Above
//
//ANSWER D Sansa marries Ramsey Bolton
///////////
//How does the Night King die?
//a Drogon's fire
//b John Snow's Long Claw
//c Arya's Dagger (Catspaw)
//d Samwell Tarly's Dragonglass
//
//ANSWER c Arya's Dagger (Catspaw)
////////////
//Which Dragon is not one of Daenerys's Dragon?
//a Viserion
//b Dracarys
//c Drogon
//d Rhaegal
//
//ANSWER b Dracarys is the command to breath fire
////////////
//Who kills Gregor Clegane?
//a Sandor Clegane
//b Oberyn Martell
//c Maester Qyburn
//d Arya Stark
//
//ANSWER a Sandor Clegane
/////////////

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
