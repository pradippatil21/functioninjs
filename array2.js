let arr = ["abc", "def", "a", "b", "c", "abc", "def", "a",];
let obj = {};
for (const element of arr){
    if (!obj[element]){
        obj[element] =true;
    }
}
for (const key in obj){
    console.log(key);
}