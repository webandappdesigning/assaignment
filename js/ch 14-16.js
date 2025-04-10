// *-----Chapter 14-16 Arrays START-----*

// ==== Question 1 =====

// let arr = [];

// ==== Question 2 =====

// let arrA = new Array();

// ==== Question 3 =====

// let veg = ["onion","potato","peas","carrot","cucumber"];

// ==== Question 4 =====

// let num = [12,13,14,15,16];

// ==== Question 5 =====

// let bool = [true,false,false,true];

// ==== Question 6 =====

// let mix =["ayesha","khiyani",20,true];

// ==== Question 7 =====

// let qualification = [  "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]

// document.write("<h1>Qualification</h1>");
// document.write("<ul>");

// for (let i = 0; i < qualification.length; i++) {
//   document.write("<li>" + qualification[i] + "</li>");
// }

// document.write("</ul>");

// ==== Question 8 =====

// let studentName = ["ayesha","alishba","mahnoor"]
// let score =[320,430,480];
// let total =500;
// let percentage1 =(score[0]/total*100)
// let percentage2 =(score[1]/total*100)
// let percentage3 =(score[2]/total*100)
// document.write("score of "+studentName[0]+" is "+score[0]+". Percentage: "+percentage1 +"%" +"<br>" )
// document.write("score of "+studentName[1]+" is "+score[1]+". Percentage: "+percentage2 +"%" +"<br>" )
// document.write("score of "+studentName[2]+" is "+score[2]+". Percentage: "+percentage3 +"%" +"<br>" )

// // ==== Question 9 =====

// let colors = ["red", "green", "blue"];
// document.write("<h3>Initial Colors:</h3>" + colors + "<br><br>");

// // ------ Part A ------
// let colorAtStart = prompt("Which color do you want to add to the beginning?");
// colors.unshift(colorAtStart);
// document.write("<b>After adding to beginning:</b> " + colors + "<br><br>");

// ------ Part B ------
// let colorAtEnd = prompt("Which color do you want to add to the end?");
// colors.push(colorAtEnd);
// document.write("<b>After adding to end:</b> " + colors + "<br><br>");

// ------ Part c ------
// colors.unshift("purple", "orange");
// document.write("<b>After adding two colors to beginning:</b> " + colors + "<br><br>");

// ------ Part D ------
// colors.shift();
// document.write("<b>After deleting first color:</b> " + colors + "<br><br>");

// ------ Part E ------
// colors.pop();
// document.write("<b>After deleting last color:</b> " + colors + "<br><br>");

// ------ Part F ------
// let indexToAdd = +prompt("At which index do you want to add a color?");
// let colorToAdd = prompt("Enter the color name to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("<b>After adding color at index " + indexToAdd + ":</b> " + colors + "<br><br>");

// ------ Part G ------
// let indexToDelete = +prompt("At which index do you want to delete color(s)?");
// let numOfColorsToDelete = +prompt("How many colors do you want to delete?");
// colors.splice(indexToDelete, numOfColorsToDelete);
// document.write("<b>After deleting " + numOfColorsToDelete + " color(s) from index " + indexToDelete + ":</b> " + colors );

// ==== Question 10 =====

// let studentScores = [85, 72, 90, 66, 58, 95, 77];

// document.write("<h2>Original Scores:</h2> " + studentScores + "<br><br>");

// document.write("<h4>Ordered Scores:</h4> "+ studentScores.sort() );

// ==== Question 11 =====

// let citiesName = ["Karachi","Peshawar","Quetta","Lahore","Kashmir"]

// document.write("<h3>Cities List:</h2> " + citiesName + "<br><br>");

// let selectedCities = citiesName.slice(1,4)

// document.write("<h4>Selected cities list:</h4> "+ selectedCities );

// ==== Question 12 =====

// let arr = ["This ","is ","my ","Cat"]

// document.write("<h2>Array:</h2> " + arr + "<br><br>");

// let str = arr.join("")

// document.write("<h4>String:</h4> "+ str +".");

// ==== Question 13 =====

// let devices = ["keyboard", "mouse", "printer", "monitor"];

// document.write("<h3>Devices:</h3>" + devices + "<br><br>");

// for (let i = 0; i < devices.length; i++) {
//   document.write("Out:<br>" + devices[i] + "<br><br>");
// }

// ==== Question 14 =====

// let devices = ["keyboard", "mouse", "printer", "monitor"];

// document.write("<h3>Devices:</h3>" + devices + "<br><br>");

// for (let i = devices.length - 1; i >= 0; i--) {
//   document.write("Out:<br>" + devices[i] + "<br><br>");
// }

// ==== Question 15 =====

// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// document.write("<option>" + manufacturers[0] + "</option>");
// document.write("<option>" + manufacturers[1] + "</option>");
// document.write("<option>" + manufacturers[2] + "</option>");
// document.write("<option>" + manufacturers[3] + "</option>");
// document.write("<option>" + manufacturers[4] + "</option>");
// document.write("<option>" + manufacturers[5] + "</option>");
// document.write("</select>");
