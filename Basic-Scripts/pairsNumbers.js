const number = a => {
    if (a % 2 == 0) {
        console.log(a + " It´s a pair number");
        alert(a + "It´s a pair number")
    } else {
        console.log(a + " It´s a odd number");
        alert(a + "It´s a odd number")
    }
}

n = prompt("Say me a number and I told you if it´s pair or odd");
number(n);