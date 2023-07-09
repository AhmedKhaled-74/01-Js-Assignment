/*********** JS Assignment 01 **********/
/************************/
/************************/
/*

1)Write a program that allow to user enter number then print it

solve/
var x = +window.prompt("Enter a Num");
console.log(x);

*/
/************************/
/*

2)Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

solve/
var x = +window.prompt("Enter a Num");
if (x % 3 == 0 && x % 4 == 0) {
  console.log("Yes");
} else {
  console.log("No");
}

*/
/************************/
/*
3)Write a program that allows the user to insert 2 integers then print the max

solve/
var x = +window.prompt("Enter first integer");
var y = +window.prompt("Enter second integer");
if (x > y) {
  console.log(x);
} else if (y > x) {
  console.log(y);
} 

*/
/************************/
/*

4)Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

solve/
var x = +window.prompt("Enter an integer");
if (x < 0) {
  console.log("Negative");
} else {
  console.log("Positive");
}

*/
/************************/
/*

5)Write a program that take 3 integers from user then print the max element and the min element.

solve/
var x = +window.prompt("Enter first integer");
var y = +window.prompt("Enter second integer");
var z = +window.prompt("Enter third integer");
if (x > y && x > z && y < z) {
  console.log("max element = " + x);
  console.log("min element = " + y);
} else if (x > y && x > z && y > z) {
  console.log("max element = " + x);
  console.log("min element = " + z);
} else if (x < y && y > z && x > z) {
  console.log("max element = " + y);
  console.log("min element = " + z);
} else if (x < y && y > z && x < z) {
  console.log("max element = " + y);
  console.log("min element = " + x);
} else if (x < y && y < z && x < z) {
  console.log("max element = " + z);
  console.log("min element = " + x);
} else if (x > y && y < z && x < z) {
  console.log("max element = " + z);
  console.log("min element = " + y);
}

*/
/************************/
/*

6)Write a program that allows the user to insert integer number then check If a number is oven or odd

solve/
var x = +window.prompt("Enter a Num");
if (x % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

*/
/************************/
/*

7)Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

solve/
var x = window.prompt("Enter a character");
if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u" || x == "A" || x == "E" || x == "I" || x == "O" || x == "U") {
  console.log("vowel");
} else {
  console.log("consonant");
}

*/
/************************/
/*

8)Write a program that allows user to insert integer then print all numbers between 1 to that’s number

solve/
var x = +window.prompt("Enter a Num");

for (i = 1; i < x; i++) {
  console.log(i);
}
console.log(x);

*/
/************************/
/*

9)Write a program that allows user to insert integer then print a multiplication table up to 12.

solve/
var x = +window.prompt("Enter an integer");

for (i = x; i < 12 * x; i += x) {
  console.log(i);
}
console.log(i);

*/
/************************/
/*

10)Write a program that allows to user to insert number then print all even numbers between 1 to this number

solve/
var x = +window.prompt("Enter a Num");
if (x % 2 == 0) {
  for (i = 2; i < x; i += 2) {
    console.log(i);
  }
  console.log(x);
}

*/
/************************/
/*

11)Write a program that take two integers then print the power

solve/
var x = +window.prompt("Enter a Num");
var y = +window.prompt("Enter the Power");
console.log(x ** y);

*/
/************************/
/*

12)Write a program to enter marks of five subjects and calculate total, average and percentage.

solve/
var a = +window.prompt("Enter mark 1");
var b = +window.prompt("Enter mark 2");
var c = +window.prompt("Enter mark 3");
var d = +window.prompt("Enter mark 4");
var e = +window.prompt("Enter mark 5");
var totalFullMarks = +window.prompt("Enter total max Marks");
var total = a + b + c + d + e;
var avg = total / 5;
var per = (total / totalFullMarks) * 100;
console.log("Total = " + total);
console.log("Average = " + avg);
console.log("Percentage = " + per + " %");

*/
/************************/
/*

13)Write a program to input month number and print number of days in that month.

solve/
var x = +window.prompt("Enter month number");
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 8 || x == 10 || x == 12) {
  console.log("Days in Month: 31");
} else if (x == 4 || x == 6 || x == 9 || x == 11) {
  console.log("Days in Month: 30");
} else if (x == 2) {
  console.log("Days in Month: 28");
} else {
  console.log("Not a valid month number");
}

*/
/************************/
/*

14)Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade

solve/
var a = +window.prompt("Enter mark of Physics");
var f = +window.prompt("Enter max mark of Physics");
var b = +window.prompt("Enter mark of Chemistry");
var g = +window.prompt("Enter max mark of Chemistry");
var c = +window.prompt("Enter mark of Biology");
var h = +window.prompt("Enter max mark of Biology");
var d = +window.prompt("Enter mark of Mathematics");
var i = +window.prompt("Enter max mark of Mathematics");
var e = +window.prompt("Enter mark of Computer");
var j = +window.prompt("Enter max mark of Computer");
function getResult(x, y) {
  res = (x / y) * 100;
  if (res < 40) {
    console.log("Percentage " + res + "% : Grad F");
  } else if (res >= 40 && res < 60) {
    console.log("Percentage " + res + "% : Grad E");
  } else if (res >= 60 && res < 70) {
    console.log("Percentage " + res + "% : Grad D");
  } else if (res >= 70 && res < 80) {
    console.log("Percentage " + res + "% : Grad C");
  } else if (res >= 80 && res < 90) {
    console.log("Percentage " + res + "% : Grad G");
  } else if (res > 90) {
    console.log("Percentage " + res + "% : Grad A");
  }
}
console.log("Physics >>");
getResult(a, f);
console.log("Chemistry >>");
getResult(b, g);
console.log("Biology >>");
getResult(c, h);
console.log("Mathematics >>");
getResult(d, i);
console.log("Computer >>");
getResult(e, j);

*/
/************************/
/*

15)Write a program to print total number of days in month

solve/
var x = +window.prompt("Enter month number");
switch (x) {
  case 1:
    console.log("Days in Month: 31");
    break;
  case 2:
    console.log("Days in Month: 28");
    break;
  case 3:
    console.log("Days in Month: 31");
    break;
  case 4:
    console.log("Days in Month: 30");
    break;
  case 5:
    console.log("Days in Month: 31");
    break;
  case 6:
    console.log("Days in Month: 30");
    break;
  case 7:
    console.log("Days in Month: 31");
    break;
  case 8:
    console.log("Days in Month: 31");
    break;
  case 9:
    console.log("Days in Month: 30");
    break;
  case 10:
    console.log("Days in Month: 31");
    break;
  case 11:
    console.log("Days in Month: 30");
    break;
  case 12:
    console.log("Days in Month: 31");
    break;
  default:
    console.log("Not a valid month number");
}

*/
/************************/
/*

16)Write a program to check whether an alphabet is vowel or consonant

solve/
var x = window.prompt("Enter a character");
switch (x) {
  case "a":
    console.log("vowel");
    break;
  case "e":
    console.log("vowel");
    break;
  case "i":
    console.log("vowel");
    break;
  case "o":
    console.log("vowel");
    break;
  case "u":
    console.log("vowel");
    break;
  case "A":
    console.log("vowel");
    break;
  case "E":
    console.log("vowel");
    break;
  case "I":
    console.log("vowel");
    break;
  case "O":
    console.log("vowel");
    break;
  case "U":
    console.log("vowel");
    break;
  default:
    console.log("consonant");
}

*/
/************************/
/*

17)Write a program to find maximum between two numbers

solve/
var x = +window.prompt("Enter first integer");
var y = +window.prompt("Enter second integer");

switch (true) {
  case x > y:
    console.log(x);
    break;
  case y > x:
    console.log(y);
    break;
  default:
    console.log("equal");
}

*/
/************************/
/*

18)Write a program to check whether a number is even or odd

solve/
var x = +window.prompt("Enter a number");

switch (true) {
  case x % 2 == 0:
    console.log("even");
    break;

  default:
    console.log("odd");
}

*/
/************************/
/*

19)Write a program to check whether a number is positive or negative or zero

solve/
var x = +window.prompt("Enter a number");

switch (true) {
  case x >= 0:
    console.log("positive");
    break;

  default:
    console.log("negative");
}

*/
/************************/
/*

20)Write a program to create Simple Calculator

solve/
var num1 = +window.prompt("Enter the first number");
var operator = prompt("Enter an operator (+, -, *, /)");
var num2 = +window.prompt("Enter the second number");
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;

  case "*":
    result = num1 * num2;
    break;

  case "/":
    result = num1 / num2;
    break;

  default:
    NaN;
}
console.log(result);

*/
