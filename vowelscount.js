
// let count=0;
// function countvowel(orgstr){
//    if(Map.contains("a")|| Map.contains("e")|| Map.contains("i")){
//     count++;
//     return count;
//    }
// }

// countvowel("INVEXTECH");

let countvowels = (orgstrin) => {
    let matches = orgstrin.match(/[aeiolu]/gi);
    
    return matches ? matches.length : 0;
        
};

// let s= ""
console.log(countvowels("invextech"));

console.log(countvowels("qasimMuneer"));


