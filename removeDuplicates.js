function removeDuplicate(arr){
    let k =0;
    for(let i =0; i<arr.length; i++){
        if(arr[i]> arr[k]){
            k++;
            arr[k] = arr[i];

        }
    }
    for(let i =0; i<k; i++){
        console.log(arr[i]);
    }

}

let arr = [0,0,1,1,1,2,2,3,3,4];
removeDuplicate(arr);