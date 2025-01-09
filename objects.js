const obj1={
    1:"a",
    2:"b",
    3:"c",
    name:"Ujjwal"
}
const obj2={
    roll:177,
    c:5}
    
let obj3={...obj1,...obj2}
// console.log(obj3.roll)
//console.log(typeof Object.keys(obj2)[0]);// returns arrays of keys
// console.log(Object.entries(obj3)) // enteries function puree objects ke key value pair ko  as 2 d array return krtanhai jisme : contains array of array of key value pair

const {name:n}=obj1
console.log(n);
// can have array of objects also
//[{},{}]
console.log(obj1.hasOwnProperty('name'));