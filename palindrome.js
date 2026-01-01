function palindromeNumber(num){
    let numCopy = num;
    let rev = 0;
    while(numCopy>0){
        let digit = numCopy%10;
        rev = rev*10 + digit;
        numCopy = Math.floor(numCopy/10);
    }
    if(rev === num){
        return true;
    }else{
        return false;
    }

}

let num = 121;
console.log(palindromeNumber(num));