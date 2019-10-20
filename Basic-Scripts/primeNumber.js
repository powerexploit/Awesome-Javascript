function* generatePrimeNumbersUptoN(n){
    for(let num of getNumbers(n)){
        if(isPrime(num)){
            yield num;
        }
        continue;
    }
}

function* getNumbers(n){
    let init = 2;
    while(true){
        if(n === init){
            return n;
        }
        yield init++;
    }
}

function isPrime(num){
    for(let i = 2; i * i <= num ; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

//Tests
for(let num of generatePrimeNumbersUptoN(10)){
    console.log(num);
}
for(let num of generatePrimeNumbersUptoN(100)){
    console.log(num);
}
for(let num of generatePrimeNumbersUptoN(1000)){
    console.log(num);
}