const greeting = "hey,you are awesome!";
const female="";
const male ="";
const fullname = female.toLowerCase()+" "+male.toLowerCase();
console.log(fullname);
let sum=0  
for(i=0; i<fullname.length; i++){
 sum = sum+fullname.charCodeAt(i);
}
console.log(sum);
const total = sum%101;
console.log("hey your love percentage is: "+total);
