// This Stack is written using the pseudoclassical pattern

// Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};
}

// Adds a value onto the end of the stack
Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
}

// Removes and returns the value at the end of the stack
Stack.prototype.pop = function() {
    // Check to see if the stack is empty
    if (this.count === 0) {
        return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

// Returns the length of the stack
Stack.prototype.size = function() {
    return this.count;
}
