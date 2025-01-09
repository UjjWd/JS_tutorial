const obj1={
    1:"a",
    2:"b",
    3:"c",
    name:"Ujjwal"
}
const obj2={
    roll:177,
    c:5,
    hi:()=>{
        console.log("GOOD MORNING ");
    }}
    
let obj3={...obj1,...obj2}
// console.log(obj3.roll)
//console.log(typeof Object.keys(obj2)[0]);// returns arrays of keys
// console.log(Object.entries(obj3)) // enteries function puree objects ke key value pair ko  as 2 d array return krtanhai jisme : contains array of array of key value pair

const {name:n}=obj1
// console.log(n);
// can have array of objects also
//[{},{}]
// console.log(obj2.hi());
// console.dir(this)
const sum=()=>(10+10);
// console.log(sum())
// console.log(()=>(10+10)());

// (function(){
//     console.log("HELLO")
// })();

function greet(...num1){ // ye operator ba acccha hai num1 array of argumenrts bn jata hai num1 ko function ke under access bhi kr skte hain as a array smjhe??
    let sum=0;
 for(let i=0;i<num1.length;i++){
    // console.log(num1[i])
    sum+=num1[i];
 }
 return sum;
}
console.log(greet(20,30,40,50));
function chai(arr){
    return arr[0];
}
console.log(chai([10,20,20]));


