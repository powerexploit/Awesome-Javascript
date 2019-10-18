// We declare a variable in javacript by var keyword.
var a = 8;
a = 5;

//console.log() is used to print the output.
console.log(a);

//Unlike C variables can be redclared in js.
var a = 2;
console.log(a);

//What will be the output of
console.log(a+a);

//Note: Variable declaration is processed before any code is executed, so
kenobi = "High Ground";
var kenobi;

//is same as
var kenobi;
kenobi = "High Ground";
//Hence a variable can be used before declaring in javascript.

//This on the other hand will throw an error, becoz we haven't declared k in our program.
//k;
//console.log(k)

/*  ===============================================================================================
    =========================================IF-ELSE-ELSEIF========================================
    =============================================================================================== */

var kenobi = "Hello There"
if(kenobi === "Hello There"){
    console.log("General Kenobi!");
}
else{
    console.log("You are doomed");
}

//Differnece between == and ===
var f = "3";
if(f === 3){
    console.log(f);
}
else if(f == 3){
    console.log(f);
}
/*  ===============================================================================================
    =========================================LOOPS=================================================
    =============================================================================================== */

//for loop
for(var i = 0; i< 3; i++){
    console.log(i);
}

console.log(i)

//while loop
var j = 2

//Make sure the condition in the loop eventually becomes false.
//The expression in while loop is of boolean type.
while(j<8){
    console.log(j);
    j++;
}
console.log(j);

//do-while loop
var i = 1;
do{
    i = i*2;
    console.log(i);
}while(i<4);


/*  ===============================================================================================
    =========================================FUNCTION==============================================
    =============================================================================================== */

//A function is a set of statements that performs a task or calculates a value.

function print(greeting){
    console.log(greeting);
}

print("Hola");

function cube(x){
    return x*x*x;
}

console.log(typeof cube);

print(cube(3));

//Or it can also be written as

var cube = function(num){
    return num*num*num;
}

console.log(cube(2));

//Find the output.
var x = 2;
var y = 3;

function multiply(){
    console.log(x*y);
}

multiply();