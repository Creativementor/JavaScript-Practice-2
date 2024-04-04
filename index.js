document.write(`<h1>Chapter no 06 to 09</h1><br><br>`)


// Qno01.Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write(`<h2>Question no 01</h2><br><br>`)


var result;


document.write(`<b>Result :</b><br><br>`)

result = 10;

document.write("The value of a is : " + result + "<br><br>" )


document.write("<b>...................................</b><br><br>")


var result2 = ++result;


document.write("The value of ++a is :" + result2 + "<br><br>")

document.write("Now the value of a is :" + result2 + "<br><br><br><br>")


document.write("The value of a++ is :" + result2 + "<br><br>")

var resultIncrement = result++;
var increment = ++resultIncrement;

document.write("Now the value of a is :" + increment + "<br><br><br><br>")

var decrement = --increment;

document.write("The value of --a is :" + decrement + "<br><br>")
document.write("Now the value of a is :" + decrement + "<br><br><br><br>")


var decrement2 = decrement--; 

document.write("The value of a-- is :" + decrement2 + "<br><br>")

var dcrement = --decrement2; 

document.write("Now the value of a is :" + dcrement + "<br><br>")






