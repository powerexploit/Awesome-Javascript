function reverseNumber(num){
    var reverseThis = num.toString().split("");
    reverseThis = reverseThis.reverse();
    return(parseInt(reverseThis.join("")));
}

console.log(reverseNumber(123456789));