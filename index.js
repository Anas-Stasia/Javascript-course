const massMark1 = 78;
const heightMark1 = 1.69;


const massJohn1 = 92;
const heightJohn1 = 1.95;

const markHigherBMI1 = massMark1 > massJohn1



const markBMI1 = massMark1 / heightMark1 ** 2;
const johnBMI1 = massJohn1 / (heightJohn1 *heightJohn1);
console.log(markBMI1, johnBMI1);
console.log(markHigherBMI1)

if (markBMI1 >= johnBMI1) {
    console.log("Mark's BMI is higher than John's!")

}else{
    console.log("John's BMI is higher than Mark's!")
}

if (markBMI1 >= johnBMI1) {
    console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1}!)`)

}else{
    console.log(`John's BMI (${johnBMI1} is higher than Mark's (${markBMI1})!`)
}

// const massMark2 = 95;
// const heightMark2 = 1.88;

// const massJohn2 = 95;
// const heightJohn2 = 1.88;


// const markBMI2 = massMark2 / markheight2 ** 2;


// const johnBMI2 = massJohn2 / heightJohn2 ** 2;

// const markHigherBMI1 = markBMI1 > johnBMI1;
// const markHigherBMI2 = markBMI2 > johnBMI2;
// console.log("Is Mark's BMI higher than John's in the first case? " + markHigherBMI1);
// console.log("Is Mark's BMI higher than John's in the second case? " + markHigherBMI2);


// let firstName = "Jonas";
// let job = "Teacher";
// let age = 58;


// console.log("I'm " + age + " years old and I am a " + job);

// let jonas = "I'm" + '' + "a" + '' + age + " years old" + '' + job
// console.log(jonas)

// console.log(`I'm ${firstName } and ${age} years old and a ${job}`)

// let age = 15;

// if (age >= 18){
//     console.log("Sarah can start driving licence")
// }else {
//     console.log("Sarah can't start driving licence")
// }