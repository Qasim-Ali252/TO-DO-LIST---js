let arr = [1,4,-56,-76,2];

function getpositive(arr){
    let sum =0;
    for(let i =0; i<arr.length; i++){
        if(arr[i]>=0){
            sum = sum + arr[i];  
        }
    }
    return sum;
}

console.log(getpositive(arr));

