function reverseInteger(x){
    let rev = 0;
    while(x>0){
        digit = x%10;
        rev = rev*10 + digit;
        x = Math.floor(x/10);

    }
    return rev;

}
let x = 6544678;
console.log(reverseInteger(x));