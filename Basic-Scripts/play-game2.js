//Declare global variables
var num = 0;
var numUser = "";


//Declare function that will be called later
function numRandom(){

    num = Math.floor(Math.random() * (6 - 1)) + 1;
    numUser = prompt("Try to guess a number from 1 to 5!");


    if(num != numUser){
        alert("You failed, the number was " + num + ".  Retry!!");
    }
}

//Call the function using a do-while loop.
do{
    numRandom();

}while(num != numUser);

alert("Great!! , you got the number right.");

























