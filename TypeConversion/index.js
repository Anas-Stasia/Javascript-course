let n = '1' + 1;
n = n - 1;
console.log(n);

// let favourite = prompt("What is your favourite food?")

// console.log(favourite)

let age = 21;
if (age >= 20 || age === 20) {
    console.log('You are legal')
}else {
    console.log('You are not legal')
}


// Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

let scoreDolphin1 = 96;
let scoreDolphin2 = 108;
let scoreDolphin3 = 89;
let averageDolphin = (96+ 108 + 89)/3
console.log(averageDolphin)

let scoreKoala1 = 88;
let scoreKoala2 = 91;
let scoreKoala3 = 110;
let averageKoala = (scoreKoala1+ scoreKoala2 + scoreKoala3)/3
console.log(averageKoala)

if (averageKoala > averageDolphin){
    console.log("Koala is the winner of the competition")

}else if(averageDolphin > averageKoala){
    console.log('Dolphin is the winner of the competition')
}else (averageDolphin === averageKoala);{
    console.log('There is no winner')
}


if (averageDolphin > averageKoala && averageDolphin >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (averageKoala> averageDolphin && averageKoala >= 100) {
  console.log("Koalas win the trophy 🏆");
} else {
  console.log("No team wins the trophy ");
}


if (averageDolphin === averageKoala && averageDolphin >= 100) {
  console.log("There is a draw🏆");
} else if (averageKoala === averageDolphin && averageKoala >= 100) {
  console.log("There is a draw 🏆");
} else {
  console.log("There is no draw ");
}
