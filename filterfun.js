// filter function
// it is also higher order function
// filter also loop over the array element 
//  there is one speacial things about the filter 
// i.e. the argument fun f which have to pass inside filter should always return boolean otherwise output will be converted to boolean
// 
// filter loops over every element ,passes that element in the argument fun and then if the output of this fun call is true then it store the
// original element in a new array otherwise does not add element to the array
// 
// 
function isOddOrEven(x){
    return (x % 2 == 0); 
}
// returning a boolean.......so only even stored
let arr = [1,2,3,4,5,6,7,8,9];
const result = arr.filter(isOddOrEven);
console.log(result);