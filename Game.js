var readlineSync = require("readline-sync");

const chalk = require('chalk');

var score = 0;
var userName = readlineSync.question("what is your name  ");
console.log("\n");
console.log("welcome " + userName  + "  Learn Math with FUN !!!!");
console.log("\n");

function play(question,question2,question3,answer) {
   console.log(question);
   console.log("\n");
   console.log(question2);
   console.log("\n");
   var currentanswer=readlineSync.question(question3);
   if(currentanswer === answer) {
     console.log(chalk.green("A.10")+" B)20"+" c)30"); 
     
     score = score+1;
   }else {
     console.log(chalk.green("A.10")+" B)20"+" c)30");
     

   }
   
   console.log(score);
   console.log("-------");
}

var questions = [
  {
    question:"1. 10% of 100 ",
    question2:"A) 10   B) 20   C) 30",
    question3:"Choose your option  ",
    answer:"A",
  },
  {
    question:"2. 100 is what percent of 1000",
    question2:"A) 10   B) 20    C) 30",
    question3:"What is your option  ",
    answer:"A",
  }
];

for(var i=0;i<=questions.length-1;i=i+1) {
  var currentquestion = questions[i];
  play(currentquestion.question,currentquestion.question2,currentquestion.question3,currentquestion.answer);
}
console.log("\n");
if(score ===0){
  console.log("your score is " + chalk.red(score));
}else {
  console.log("your score is " + chalk.green(score));
}

