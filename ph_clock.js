"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Khalel Abaquin
   Date:  2.14.19 <3
 
   Filename:   ph_clock.js     

*/






/* ------------------------------------------------- */



/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

// This block of code sets the three 'Left' varibales to numbers. The third variable has a formula that uses both the first & second variables.
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = (minsLeft * 60) + secsLeft;

// This line of code changes the value of the function 'countdown' by 1000 milliseconds, or 1 second, & stores that value inside the variable 'clockID'.
var clockIdD = setInterval("countdown()", 1000);

// This function is responible for the timer counting down.
function countdown() {

    // This line of code sets the varibale 'minsleft' to the given formula & rounding it to the lowest number.
    minsLeft = Math.floor(timeLeft / 60);

    // This line of code sets the varibale 'secsLeft' to the given function that includes other variables.
    secsLeft = timeLeft - 60 * minsLeft;

    // This section of code gives the 2 variables values of the 'addLeadingZero' function with the parapmeters of 'minsLeft' & 'secsLeft'.
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsLeft);

    // This block of code grabs the elements with the ids of 'minutes' & 'seconds' changes the content of the html to the variables 'minsString' & 'secsString' respectivley.
    document.getElementById('minutes').innerHTML = minsString;
    document.getElementById('seconds').innerHTML = secsString;

    // This line of code calls upon the function 'checkTimer'.
    checkTimer();

    // This line of code counts down from the time that is left by decrements of one. 
    timeLeft--;
}

// This function is responsible for stopping the clock so that it does not go on forever & if the timer ends, the order will expire.
function stopClock() {
    document.getElementById("TimeHead").insertAdjacentElement("beforeend", "<br />(Order Expired)");

    clearInterval(clockIdD);
}

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}