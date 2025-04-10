// *-----Chapter 9-11 user input and conditional statement START-----*

// ==== Question 1 =====

// let cityName = prompt("Enter your city name ?")
// if (cityName==="karachi" || cityName==="Karachi") {
//     alert("welcome to the city of light")
// } else {
//     alert("pls enter the correct name")
// }

// ==== Question 2 =====

// let gender = prompt("enter your gender name ?")
// if (gender==="male") {
//     alert("Good Morning Sir")
// }
// if (gender==="female") {
//     alert("Good Morning Ma'am")
// } else {
//     alert("sorry!")
// }

// ==== Question 3 =====

// let signalColor = prompt("Enter the color of road traffic signal?")
// if (signalColor==="red" || signalColor==="Red") {
//     alert("Must Stop!")
// }
// if (signalColor==="yellow" || signalColor==="Yellow") {
//     alert("Ready to move!")
// }
// if (signalColor==="green" || signalColor==="Green") {
//     alert("Move now!")
// }
// else{
//     alert("pls write the right color name")
// }

// ==== Question 4 =====

// let fuelcar = +prompt("enter your remaining fuel in litres")
// if (fuelcar<0.25) {
//     alert("please refill the fuel in your car")
// } else {
//     alert("your car fuel is full")
// }

// ==== Question 5 =====

// ------ Part A ------
// let a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// ------ Part B ------

// let b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// ------ Part C ------

// let c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }

// ------ Part D ------

// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// ------ Part E ------

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// ------ Part F ------    

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// ==== Question 6 =====

// let obtainedMarks = +prompt("enter marks obtained marks according to three subject")
// let totalMarks = +prompt("enter total marks:")
// let percentage = (obtainedMarks/totalMarks)*100;
// percentage = percentage.toFixed(2);

// document.write("<h3>"+"Marksheet"+"</h3>")
// document.write("Total marks: "+ totalMarks + "<br>")
// document.write("Percentage: "+ percentage + "<br>")

// let grade;
// let remarks;
// if (percentage>=90) {
//     grade ="A-one";
//     remarks ="Excellent";
// }
// else if (percentage>=80) {
//     grade ="A";
//     remarks ="good";
// }
// else if (percentage>=70) {
//     grade = "B";
//     remarks = "You need to improve";
// }
// else if (percentage<60) {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// else{
//     document.write("Invalid Input"+ "<br>")
// }

// document.write("Grade : " +grade+"<br>")
// document.write("Remarks : " +remarks+"<br>")

// ==== Question 7 =====

// let secretNumber = 5;
// let userInput = +prompt("Guess the Secret Number:")
// if (userInput==5) {
//     alert("Bingo! Correct answer")
// } else if (userInput==4) {
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("sorry! Better luck for next time")
// }

// ==== Question 8 =====

// let userNumber = +prompt("Enter number to check number is divisible by 3 or not:")
// if (userNumber % 3===0 ) {
//     alert(userNumber+ " is divisible by 3")
// } else {
//     alert(userNumber+ " is not divisible by 3")
// }

// ==== Question 9 =====

// let num = +prompt('Enter number to check number is even or odd');
// if (num % 2 === 0) {
//     alert(num + " is even")
// }
// else {
//     alert(num + " is odd")
// }

// ==== Question 10 =====

// let temperature = +prompt("enter the temperature according to your area or city")
// if (temperature>40) {
//     alert("It is too hot outside!")
// }
// else if (temperature>=30) {
//     alert("The Weather today is Normal!")
// }
// else if (temperature>=20) {
//     alert("Today's Weather is cool!")
// }
// else if (temperature>10) {
//     alert("OMG! Today's weather is so cool.")
// }

// ==== Question 11 =====

// let firstNumber=+prompt("Enter first Number");
// let secondNumber=+prompt("Enter second Number");
// let oper=prompt("Choose your operation : \n(+, - , * , % ")
// if(oper==='+'){
//     alert(firstNumber+secondNumber)
// }
// else if(oper==='-'){
//     alert(firstNumber-secondNumber)
// }
// else if(oper==='*'){
//     alert(firstNumber*secondNumber)
// }
// else if(oper==='/'){
//     alert(firstNumber/secondNumber)
// }
// else{
//     alert(firstNumber%secondNumber)
// }

// *-----Chapter 9-11 user input and conditional statement END-----*
