/**
 A reverse polish calculate implemented in ES6
 Algorithm described below:

 for each token in the postfix expression:
   if token is an operator:
     operand_2 ← pop from the stack
     operand_1 ← pop from the stack
     result ← evaluate token with operand_1 and operand_2
     push result back onto the stack
   else if token is an operand:
     push token onto the stack
 result ← pop from the stack

 */

//Create a class for the postfix calculator.
class PostfixCalculator {
    //Create a function which takes and expression and returns the result.
    calculate = (expression) => {
        //Create the stack to store processed tokens.
        let stack = [];
        //Split the expression into tokens.
        let tokens = expression.split(' ');
        //Loop through each token.

        let operators = ['*','+','-','/','%'];

        tokens.forEach((token) => {
            //Ensure the token isn't empty.
            if(token !== ""){
                //Check if the token is numeric.
                if(isFinite(parseFloat(token))) {
                    //Add the number to the stack to be processed.
                    stack.push(token);
                }else{
                    //Ensure the stack has enough variables to evaluate and that the token is in our accepted tokens.
                    if(stack.length >= 2 && operators.includes(token)) {
                        //In reality each operator would have a specific implementation.
                        //As this is an example we'll let javascript evaluate the expression.
                        //If we implemented each one separately, then more advanced operators like powers could be added.
                        let b = stack.pop();
                        let a = stack.pop();
                        stack.push(eval(a + token + b));
                    }else{
                        //Handle error.
                        return "Error - Invalid Expression."
                    }
                }
            }
            console.log(stack);
        });
        //Ensure there is only 1 number left in the stack.
        if(stack.length === 1){
            //Return the results.
            return stack[0];
        }else{
            //Handle error.
            return "Error - Invalid Expression.";
        }
    };
}

//Create an instance of PostFixCalculator.
const calculator = new PostfixCalculator();

//Examples.
console.log(calculator.calculate('5 5 +'));
console.log(calculator.calculate('2 3 5 5 + - *'));

