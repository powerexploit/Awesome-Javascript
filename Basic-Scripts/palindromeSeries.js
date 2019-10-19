function* generateNPalindromNumbers(start, end){
    for(let num of Array.from({length: end - start}).map((_,idx) => start++)){
        if(isPalindrome(num)){
            yield num;
        }
        continue;
    }
}

function isPalindrome(num){
    num = num + '';
    let ptr = num.length - 1;
    let temp = 0;
    while(ptr >= 0){
       temp = temp + (Math.pow(10, ptr) * +num[ptr]);
       ptr--;
    }
    if(temp == num){
        return true;
    }else{
        return false;
    }
}

//Tests
for(let num of generateNPalindromNumbers(300, 350)){
   console.log(num);
}

for(let num of generateNPalindromNumbers(100, 200)){
    console.log(num);
}