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
