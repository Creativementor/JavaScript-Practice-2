document.write(`<h1>Chapter no 06 to 09</h1><br><br>`);


          // Chapter no 06to 09 start here

// Qno01.Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write(`<h2>Question no 01</h2><br><br>`);


var result;


document.write(`<b>Result :</b><br><br>`);

result = 10;

document.write("The value of a is : " + result + "<br><br>");


document.write("<b>...................................</b><br><br>");


var result2 = ++result;


document.write("The value of ++a is :" + result2 + "<br><br>");

document.write("Now the value of a is :" + result2 + "<br><br><br><br>");


document.write("The value of a++ is :" + result2 + "<br><br>");

var resultIncrement = result++;
var increment = ++resultIncrement;

document.write("Now the value of a is :" + increment + "<br><br><br><br>");

var decrement = --increment;

document.write("The value of --a is :" + decrement + "<br><br>");
document.write("Now the value of a is :" + decrement + "<br><br><br><br>");


var decrement2 = decrement--;

document.write("The value of a-- is :" + decrement2 + "<br><br>");

var dcrement = --decrement2;

document.write("Now the value of a is :" + dcrement + "<br><br><br><br>");



// Qno2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;



document.write("<h2>Question no 02</h2><br><br>");

var a = 2;
var b = 1;

var result_ab = --a - --b + ++b + b--;

document.write(`<b>(i) --a - --b + ++b + b-- = ${result_ab}</b><br><br>`);

var varA = --a;

document.write(`<b>(ii) --a = ${varA}</b><br><br>`);


var ab = --a - --b;

document.write(`<b>(iii) --a - --b = ${ab}</b><br><br>`);

var aB = --a - --b + ++b;

document.write(`<b>(iv) --a - --b + ++b = ${aB}</b><br><br>`)

var result_AB = --a - --b + ++b + b--;

document.write(`<b>(v) --a - --b + ++b + b-- = ${result_AB}</b><br><br>`)


// Qno3. Write a program that takes input a name from user & 
// greet the user.

var name = prompt("Enter Your Name");

alert("Hello " + name + " Welcome to My Webpage");



// Qno5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.


document.write("<h1>Question no 05</h1><br><br><br>");


// var tableInp = +prompt("Enter the Number")

// var number = 1;

// var table = 5;

// if (tableInp >= 1){
//     document.write(`<h2>${tableInp} x ${number} = ${tableInp * number++}</h2>`)
//     document.write(`<h2>${tableInp} x ${number} = ${tableInp * number++}</h2>`)
//     document.write(`<h2>${tableInp} x ${number} = ${tableInp * number++}</h2>`)
//     document.write(`<h2>${tableInp} x ${number} = ${tableInp * number++}</h2>`)
//     document.write(`<h2>${tableInp} x ${number} = ${tableInp * number++}</h2>`)
//     document.write(`<h2>${tableInp} x ${number} = ${tableInp * number++}</h2>`)
//     document.write(`<h2>${tableInp} x ${number} = ${tableInp * number++}</h2>`)
//     document.write(`<h2>${tableInp} x ${number} = ${tableInp * number++}</h2>`)
//     document.write(`<h2>${tableInp} x ${number} = ${tableInp * number++}</h2>`)
//     document.write(`<h2>${tableInp} x ${number} = ${tableInp * number++}</h2>`)
// }else if (tableInp === ""){
//     document.write(`<h2>${table} x ${number} = ${table * number++}</h2>`)
//     document.write(`<h2>${table} x ${number} = ${table * number++}</h2>`)
//     document.write(`<h2>${table} x ${number} = ${table * number++}</h2>`)
//     document.write(`<h2>${table} x ${number} = ${table * number++}</h2>`)
//     document.write(`<h2>${table} x ${number} = ${table * number++}</h2>`)
//     document.write(`<h2>${table} x ${number} = ${table * number++}</h2>`)
//     document.write(`<h2>${table} x ${number} = ${table * number++}</h2>`)
//     document.write(`<h2>${table} x ${number} = ${table * number++}</h2>`)
//     document.write(`<h2>${table} x ${number} = ${table * number++}</h2>`)
//     document.write(`<h2>${table} x ${number} = ${table * number++}</h2>`)
// }

var input = parseInt(prompt("Enter the number"))

var number = input ? parseInt(input) : 5;

document.write("<h2>Multiplication Table of " + number + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(`<h2>${number} x ${i} = ${number * i}</h2>`)
}


document.write("<br><br><br>")

// Qno6. Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)


document.write("<h2>Question no 06</h2><br><br>")


var subject1 = prompt("Enter name of first subject:")
var subject2 = prompt("Enter name of second subject:")
var subject3 = prompt("Enter name of third subject:")


var totalMarks = 100;

var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"))
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"))
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"))

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write("<Table border = '2'>");

document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><th> " + subject1 + "</th><th> " + totalMarks + "</th><th> " + obtainedMarks1 + "</th></tr>");
document.write("<tr><th> " + subject2 + "</th><th> " + totalMarks + "</th><th> " + obtainedMarks2 + "</th></tr>");
document.write("<tr><th> " + subject3 + "</th><th> " + totalMarks + "</th><th> " + obtainedMarks3 + "</th></tr>");
document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
document.write("<tr><th>Percentage</th><th> " + "</th><th colspan = '2'>" + totalPercentage.toFixed(2) + "%</th></tr>");
document.write("</table>")



                //   Chapter No 06 to 09 close here


                