document.write(`<h1>Chapter no 06 to 09</h1><br><br>`);


// Qno01.Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write(`<h2>Question no 01</h2><br><br>`);


var result;


document.write(`<b>Result :</b><br><br>`);

result = 10;

document.write("The value of a is : " + result + "<br><br>" );


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

var result_ab = --a - --b + ++b +b--;

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