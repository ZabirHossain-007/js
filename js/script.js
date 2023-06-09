// display an alert message
function altMessage(){
    alert("Welcome To JavaScript Example")
}

// display date and time
function dateTime(){
    document.getElementById("date").innerHTML= Date();
}

// js code for bulb on or off

function bulbOn(){
    document.getElementById("bulbImg").src="../images/on.gif";
}

function bulbOff(){
    document.getElementById("bulbImg").src="../images/off.gif";

}

// js can change html styles
function text(){
    document.getElementById('text').style.fontSize ="45px";
}

// js statements for addition
let x,y,z;
x = 10;
y = 15;
z= x+y ;

function addition(){
    document.getElementById('output').innerHTML="The Value of Z is " + z + ".";
}

// js statements for subtraction
let a,b,c;
a = 20;
b = 5;
c= a-b ;

function subtraction(){
    document.getElementById('sub').innerHTML="The Value of C is  " + c + ".";
}

// js statements for Multiplication
let a1,b1,c1;
a1 = 20;
b1 = 5;
c1= a1*b1 ;

function multiplication(){
    document.getElementById('multi').innerHTML="The Value of C1 is  " + c1 + ".";
}

// js statements for Division
let a2,b2,c2;
a2 = 20;
b2 = 5;
c2= a2/b2 ;

function division(){
    document.getElementById('div').innerHTML="The Value of C2 is  " + c2 + ".";
}

// js statements for exponentiation
let a3,b3,c3;
a3 = 5;
b3 = 3;
c3= a3**b3 ;

function exponent(){
    document.getElementById('expo').innerHTML="The Value of C3 is  " + c3 + ".";
}


// js statements for Reminder
let a4,b4,c4;
a4 = 30;
b4 = 7;
c4= a4%b4 ;

function reminder(){
    document.getElementById('rem').innerHTML="The Value of C4 is  " + c4 + ".";
}


// js statements for += operator
var h = 15;
h += 10;

function assignmentOp(){
    document.getElementById('assign').innerHTML="The Value of H is  " + h + ".";
}


//Js for Hide and Show
function hide(){
    document.getElementById('hideShow').style.display= "none";
}
function show(){
    document.getElementById('hideShow').style.display= "block";
}

// Comparing two values
let q = 50;
let w = 70;
let e = q>w; 

function comperision(){
    document.getElementById('comp').innerHTML ="50 is bigger Than 70?:" +e;
    
}

// Concatenate two values
let text1 = "Zabir";
let text2 = "Hossain"
let fullName = text1 +" "+ text2;
function concat(){
    document.getElementById('con').innerHTML ="My Full Name is:" +fullName;
}

// adding and Concatenate
let t = 5+5;
let u = "5"+5;
let i = "Student"+10;

function addCon(){
    document.getElementById('adding').innerHTML="Addition of 5+5:" +t;
    document.getElementById('numSrting').innerHTML="Concatenate of '5'+5 is: " +u;
    document.getElementById('numSrting2').innerHTML="Concatenate of 'Student'+10 is : " +i;
}

// farenheit to celsius
let value = toCelsius(90);
document.getElementById('celsius').innerHTML = "90 Farenheit = " + value + " Celsius";
function toCelsius(f){
    return (5/9) * (f-32);
  
}

// Creating object
const person={firstName: "Zabir",
            lastName: "Hossain",
            age: 24,
            eyeColor: Brown
};

document.getElementById('obj').innerHTML = person.firstName; 
