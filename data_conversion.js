// let score=33;

// // console.log(typeof(score))
// // console.log("2"==="2")
// // console.log(`Hello myy score is ${score}`);
// // console.log(`HEY`)
// // let name="    UJJWAL";
// // console.log(name);
// // console.log (name.trim());
// // let num=new Number(10000);
// // console.log(num.toString().length);
// // console.log(num.toFixed(0));
// // console.log(num.toLocaleString('en-IN'));
// // console.log(num)
// // console.log(Math.floor((Math.random()*10)+1));
// const max=50;
// const min=80;
// // console.log(Math.floor((Math.random()*(max-min+1))+min))
// let mydate=new Date()
// console.log(mydate.toLocaleString());
 
// const myobj=new Object(); .. singleton
// myobj.name="UJJWAL"
// myobj.college="IITA"
// myobj.roll=177
// console.log(myobj.roll)

//// literal
const myobj={
    name:"ujjwal",

    roll:177,
    nameprint :function(){
        console.log(`My name is ${this.name}`);
    }
}
myobj.pprint=function(){
    console.log(`hey`)
}
console.log(myobj.pprint())