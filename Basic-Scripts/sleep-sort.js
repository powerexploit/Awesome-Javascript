//See how javascript sort an array while sleeping :)

function sleepSort(numArray) {
    numArray.forEach(num => {
        setTimeout(() => console.log(num), num);
    })
}

console.log(sleepSort([8, 34, 11, 210, 2, 39]));