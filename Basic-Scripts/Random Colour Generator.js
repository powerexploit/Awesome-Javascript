// TEST THIS SCRIPT USING JS BIN OR YOU CAN CREATE YOUR OWN HTML AND LINK THE DOCUMENTS.


const userName = prompt("Please type in your first name"); // Prompt to ask for users first name and store it into a variable.
const h1 = document.createElement("h1"); // Create h1 element.

if (userName) { // Check a value has been entered into the prompt.
  h1.textContent = userName; // Equal the h1 element to the value of the prompt.
  document.body.appendChild(h1); // Adding the h1 element to the body of the DOM.
};

// Function to generate a random hex color code.
const randomColor = function() {
  var letters = '0123456789ABCDEF'; // Numbers and letters needed to generate the hex color code.
  var color = '#'; // This is the where the hex color code will be stored.
  for (var i = 0; i < 6; i++) { // For loop to run the Math.random method 6 times. 
    color += letters[Math.floor(Math.random() * 16)]; // This will generate a random number and use it as an index to choose a character from our variable "letters" and then add that character to the variable color with the "#".
  }
  console.log(color); // Console.log the hex color code. This is optional.
  return color; // Returns whatever is stored within the "color" variable, in this case the hex color code.
}

h1.style.color = randomColor(); // Calling/executing the randomColor function and apply it to the h1 element using style.color.
