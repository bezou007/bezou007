console.log("hello world")

JS Tutorial
JS HOME
JS Introduction
JS Where To
JS Output
JS Statements
JS Syntax
JS Comments
JS Variables
JS Let
JS Const
JS Operators
JS Arithmetic
JS Assignment
JS Precedence
JS Data Types
JS Functions
JS Objects
JS Events
JS Strings
JS String Methods
JS String Search
JS String Templates
JS Numbers
JS Number Methods
JS Arrays
JS Array Methods
JS Array Sort
JS Array Iteration
JS Array Const
JS Dates
JS Date Formats
JS Date Get Methods
JS Date Set Methods
JS Math
JS Random
JS Booleans
JS Comparisons
JS If Else
JS Switch
JS Loop For
JS Loop For In
JS Loop For Of
JS Loop While
JS Break
JS Iterables
JS Sets
JS Maps
JS Typeof
JS Type Conversion
JS Bitwise
JS RegExp
JS Errors
JS Scope
JS Hoisting
JS Strict Mode
JS this Keyword
JS Arrow Function
JS Classes
JS Modules
JS JSON
JS Debugging
JS Style Guide
JS Best Practices
JS Mistakes
JS Performance
JS Reserved Words

JS Versions
JS Versions
JS 2009 (ES5)
JS 2015 (ES6)
JS 2016
JS 2017
JS 2018
JS 2019
JS 2020 / 2021
JS IE / Edge
JS History

JS Objects
Object Definitions
Object Properties
Object Methods
Object Display
Object Accessors
Object Constructors
Object Prototypes
Object Iterables
Object Sets
Object Maps
Object Reference

JS Functions
Function Definitions
Function Parameters
Function Invocation
Function Call
Function Apply
Function Bind
Function Closures

JS Classes
Class Intro
Class Inheritance
Class Static

JS Async
JS Callbacks
JS Asynchronous
JS Promises
JS Async/Await

JS HTML DOM
DOM Intro
DOM Methods
DOM Document
DOM Elements
DOM HTML
DOM Forms
DOM CSS
DOM Animations
DOM Events
DOM Event Listener
DOM Navigation
DOM Nodes
DOM Collections
DOM Node Lists

JS Browser BOM
JS Window
JS Screen
JS Location
JS History
JS Navigator
JS Popup Alert
JS Timing
JS Cookies

JS Web APIs
Web API Intro
Web Forms API
Web History API
Web Storage API
Web Worker API
Web Fetch API
Web Geolocation API

JS AJAX
AJAX Intro
AJAX XMLHttp
AJAX Request
AJAX Response
AJAX XML File
AJAX PHP
AJAX ASP
AJAX Database
AJAX Applications
AJAX Examples

JS JSON
JSON Intro
JSON Syntax
JSON vs XML
JSON Data Types
JSON Parse
JSON Stringify
JSON Objects
JSON Arrays
JSON Server
JSON PHP
JSON HTML
JSON JSONP

JS vs jQuery
jQuery Selectors
jQuery HTML
jQuery CSS
jQuery DOM

JS Graphics
JS Graphics
JS Canvas
JS Plotly
JS Chart.js
JS Google Chart
JS D3.js

JS Examples
JS Examples
JS HTML DOM
JS HTML Input
JS HTML Objects
JS HTML Events
JS Browser
JS Editor
JS Exercises
JS Quiz
JS Certificate

JS References
JavaScript Objects
HTML DOM Objects



JavaScript For Loop

Loops can execute a block of code a number of times.
JavaScript Loops

Loops are handy, if you want to run the same code over and over again, each time with a different value.

Often this is the case when working with arrays:
Instead of writing:
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";
You can write:
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
Different Kinds of Loops

JavaScript supports different kinds of loops:

    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true

The For Loop

The for statement creates a loop with 3 optional expressions:
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}

Expression 1 is executed (one time) before the execution of the code block.

Expression 2 defines the condition for executing the code block.

Expression 3 is executed (every time) after the code block has been executed.
Example
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

From the example above, you can read:

Expression 1 sets a variable before the loop starts (let i = 0).

Expression 2 defines the condition for the loop to run (i must be less than 5).

Expression 3 increases a value (i++) each time the code block in the loop has been executed.
Expression 1

Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).

This is not always the case. JavaScript doesn't care. Expression 1 is optional.

You can initiate many values in expression 1 (separated by comma):
Example
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}

And you can omit expression 1 (like when your values are set before the loop starts):
Example
let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}
Expression 2

Often expression 2 is used to evaluate the condition of the initial variable.

This is not always the case. JavaScript doesn't care. Expression 2 is also optional.

If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.

If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser. Read about breaks in a later chapter of this tutorial.
Expression 3

Often expression 3 increments the value of the initial variable.

This is not always the case. JavaScript doesn't care. Expression 3 is optional.

Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.

Expression 3 can also be omitted (like when you increment your values inside the loop):
Example
let i = 0;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}
Loop Scope

Using var in a loop:
Example
var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10

Using let in a loop:
Example
let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5

In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.

In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.

When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.
For/Of and For/In Loops

The for/in loop and the for/of loop are explained in the next chapter.
While Loops

The while loop and the do/while are explained in the next chapters.
Test Yourself With Exercises
Exercise:

Create a loop that runs from 0 to 9.

let i;
 ( = ;  < ; ) {
  console.log(i);
}


Start the Exercise

NEW

We just launched
W3Schools videos
Explore now
COLOR PICKER
colorpicker

Get certified
by completing
a JavaScript
course today!
w3schools CERTIFIED . 2022
CODE GAME
Code Game
Top Tutorials
HTML Tutorial
CSS Tutorial
JavaScript Tutorial
How To Tutorial
SQL Tutorial
Python Tutorial
W3.CSS Tutorial
Bootstrap Tutorial
PHP Tutorial
Java Tutorial
C++ Tutorial
jQuery Tutorial
Top References
HTML Reference
CSS Reference
JavaScript Reference
SQL Reference
Python Reference
W3.CSS Reference
Bootstrap Reference
PHP Reference
HTML Colors
Java Reference
Angular Reference
jQuery Reference
Top Examples
HTML Examples
CSS Examples
JavaScript Examples
How To Examples
SQL Examples
Python Examples
W3.CSS Examples
Bootstrap Examples
PHP Examples
Java Examples
XML Examples
jQuery Examples
Get Certified
HTML Certificate
CSS Certificate
JavaScript Certificate
Front End Certificate
SQL Certificate
Python Certificate
PHP Certificate
jQuery Certificate
Java Certificate
C++ Certificate
C# Certificate
XML Certificate
FORUM | ABOUT
W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.

Copyright 1999-2022 by Refsnes Data. All Rights Reserved.
W3Schools is Powered by W3.CSS.



