var readLineSync = require("readline-sync");
const chalk = require('chalk');

var name = readLineSync.question("What's your name ? ");

console.log(chalk.blue("--------------------"));
console.log("Welcome " + name);
console.log(chalk.blue("--------------------"));
console.log("Welcome to the"+chalk.red(' MARVEL ')+'quiz');

var score = 0;

var questionArray= [{
  question: "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\na:2005 \nb:2008 \nc:2010 \nd:2012\n",
  answer: "b"
}, {
  question: "What is the name of Thor’s hammer?\na:Vanir \nb:Mjolnir \nc:Aesir \nd:Norn\n",
  answer: "b"
}, {
  question: "What is Captain America’s shield made of? \na:Adamantium \nb:Vibranium \nc:Promethium \nd:Carbonadium\n",
  answer: "b"
},{
  question: "What is the real name of the Black Panther? \na:T\’Challa \nb:M\’Baku \nc:N\’Jadaka\nd:N\’Jobu\n",
  answer: "a"
},{
  question: "What fake name does Natasha use when she first meets Tony? \na:Natalie Rushman \nb:Natalia Romanoff \nc:Nicole Rohan\nd:Naya Rabe\n",
  answer: "a"
}];

function play(question, answer){
  if(answer === question.answer){
    console.log(chalk.green("Right Answer!!!"));
    score = score+1;
  } else{
    console.log(chalk.red("Oops!!!!, the correct answer is "+question.answer));
  }
}

for(var i=0; i<questionArray.length; i++){
  console.log(chalk.blue("--------------------"));
  console.log("New Question");
  console.log(chalk.blue("--------------------"));
  
  console.log(questionArray[i].question);
  var userAnswer = readLineSync.question("Your choice - ");

  play(questionArray[i], userAnswer);
}


console.log("FINAL SCORE - " + chalk.green(score));