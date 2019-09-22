function nextQuestion_ORIG() {
  currentQuestion++;
  $("#display").text("30");
  //displaying questions
  // $(".card-title").text(`${myQuestions}.Q${currentQuestion}`[1]);
  // $(".Question-one-label").text(myQuestions.Q2[2]);
  // $(".Question-two-label").text(myQuestions.Q2[3]);
  // $(".Question-three-label").text(myQuestions.Q2[4]);
  // $(".Question-four-label").text(myQuestions.Q2[5]);
  // console.log(currentQuestion);
}
/* key: ["answer", "question", "A","B","C","D"];
//   //Q1: [
//     "C Targaryen",
//     "What house does John Snow belong too?",
//     "A Stark",
//     "B Lannister",
//     "C Targaryen",
//     "D Tyrell"
//   ],
//   Q2: [
//     "D None of the Above",
//     "Who does Arya Stark Marry?",
//     "A Ramsey Bolton",
//     "B Petyr Baelish",
//     "C Gendry Baratheon",
//     "D None of the Above"
//   ],
//   Q3: [
//     "C Arya's Dagger (Catspaw)",
//     "How does the Night King die?",
//     "A Drogon's fire",
//     "B John Snow's Long Claw",
//     "C Arya's Dagger (Catspaw)",
//     "D Samwell Tarly's Dragonglass"
//   ],
//   Q4: [
//     "B Dracarys",
//     "Which Dragon is not one of Daenerys's Dragon?",
//     "A Viserion",
//     "B Dracarys",
//     "C Drogon",
//     "D Rhaegal"
//   ],
//   Q5: [
//     "A Sandor Clegane",
//     "Who kills Gregor Clegane?",
//     "A Sandor Clegane",
//     "B Oberyn Martell",
//     "C Maester Qyburn",
//     "D Arya Stark"
//   ]
// };*/
//********************************************* */
//How do I get my timer to stop counting down?
//How do I make my gifs pop up with "right" or "wrong" responses?
//How do I make the next questions come up in the HTML after the GIF?
//Do I need to make an Array and For Loop to hold the questions and call it with a function and index
//to populate a new question?.
//Do I need to gut most of my code to make a for loop work?

//"What house does John Snow belong too?"
// A Star
// B Lannister
// C Targaryen
// D Tyrell
//
//ANSWER C Targaryen
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
