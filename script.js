// // Setup vars
// var myInput = document.querySelector("#myInput");
// var myButton = document.querySelector("#btn");

// // Events
// myButton.onclick = function() {
//     // console.log(myButton.innerHTML);
//     // if (myButton.innerHTML.trim() == "Show") {

//         /***ORRRRRRRRRR************* */

//     if (myButton.getAttribute('data-text') == "show"){ // Custom Attribute   
//         // console.log("yes");
//         myInput.setAttribute('type','text'); // to convert type password to type text
//         myButton.setAttribute('data-text','hide'); // to convert type text to type password
//         myButton.innerHTML = "Hide";

//     } else {
//         // console.log("No");
//         myInput.setAttribute('type','password'); // to convert type text to type password
//         myButton.setAttribute('data-text','show'); // to convert type password to type text
//         myButton.innerHTML = "Show";

//     }

// }

// // Button = show => password => text Show => Hide => hide
// // Button = hide => text => passsowrd Hide => Show => show
/************************ORRRRRRRRRRRRRRRRRR******************* */
// // Setup vars
// var myInput = document.querySelector("#myInput");
// var myButton = document.querySelector("#btn");

// // Events
// myButton.onclick = togglePassword


// // Function
// function togglePassword() {
//     // console.log(myButton.innerHTML);
//     // if (myButton.innerHTML.trim() == "Show") {

//         /***ORRRRRRRRRR************* */

//     if (myButton.getAttribute('data-text') == "show"){ // Custom Attribute   
//         // console.log("yes");
//         myInput.setAttribute('type','text'); // to convert type password to type text
//         myButton.setAttribute('data-text','hide'); // to convert type text to type password
//         myButton.innerHTML = "Hide";

//     } else {
//         // console.log("No");
//         myInput.setAttribute('type','password'); // to convert type text to type password
//         myButton.setAttribute('data-text','show'); // to convert type password to type text
//         myButton.innerHTML = "Show";

//     }

// }

// // Button = show => password => text Show => Hide => hide
// // Button = hide => text => passsowrd Hide => Show => show
/**********ORRRRRRRRRRRRR**************/
// Setup vars
var myInput = document.querySelector("#myInput");
var myButton = document.querySelector("#btn");

// Events
myButton.addEventListener ('click', togglePassword);


// Function
function togglePassword() {
    // console.log(myButton.innerHTML);
    // if (myButton.innerHTML.trim() == "Show") {

        /***ORRRRRRRRRR************* */

    if (myButton.getAttribute('data-text') == "show"){ // Custom Attribute   
        // console.log("yes");
        myInput.setAttribute('type','text'); // to convert type password to type text
        this.setAttribute('data-text','hide'); // to convert type text to type password
        this.innerHTML = "Hide";

    } else {
        // console.log("No");
        myInput.setAttribute('type','password'); // to convert type text to type password
        this.setAttribute('data-text','show'); // to convert type password to type text
        this.innerHTML = "Show";

    }

}

// Button = show => password => text Show => Hide => hide
// Button = hide => text => passsowrd Hide => Show => show
