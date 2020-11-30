var readlineSync = require("readline-sync");

var score=0;

var chalk = require("chalk");

var username = readlineSync.question("What is your name  ");
console.log("\n");
console.log(chalk.green("Welcome " + username  + " To Learn Math with Fun !!!!"));
console.log("\n");
function play(question,option,answer) {
  console.log(chalk.bold(question));
  console.log("\n");
  console.log(option);
  console.log("\n"); 
  var currentanswer = readlineSync.question(chalk.cyan.bold("Choose the correct Option : "));
  var currentanswers=currentanswer.toUpperCase()
  console.log('\n');
  if(currentanswers === answer) {
    console.log(chalk.green("RIGHT ANSWER"));
    
    score = score+1;
    
    console.log("----------------------------------------------------------------");
    console.log("\n");
  }else {
    console.log(chalk.red("WRONG"));
    console.log("\n");
    console.log("The Right Answer is " + chalk.green(answer));

    console.log("-----------------------------------------------------------------");

    
    
    console.log("\n");
  }

  

}

var questions = [
  {
    question:"1.What is the probability that divisor of 1099 is a multiple of 1096?",
    option:"A) 1/625 B) 4/625 C) 12/625 D) 16/625",
    answer:"A",
  },
  {
    question:"2.(1015)2 = ?",
    option:"A) 1041025 B) 1030225 C) 1050125 D) 1025125",
    answer:"B",
  },
  {
    question:"3.Which one is NOT divisible by 3 ?",
    option:"A) 5271 B) 6291 C) 4372 D) 8952",
    answer:"C",
  }
];

for(var i=0;i<questions.length;i=i+1) {
  currentquestion=questions[i];
  play(currentquestion.question,currentquestion.option,currentquestion.answer);
}

console.log(chalk.bold("Your Total score is ") + chalk.green.bold(score));
