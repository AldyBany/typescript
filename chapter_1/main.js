
let array = [1,2,3,4,5];
const result = array.reduce((ac,val)=>{
  return ac + val;
});
// console.log(result);
let fruits = ["apple","mango","orange","lemon","kiwi"];
// console.log(fruits.indexOf("orange"))
// console.log(fruits.includes("lemon"))
let students = [
  {
    name:"ABC",
    age:28
  },
  {
    name:"DER",
    age:18
  }
]

const student = students.find(s =>{
  return s.age == 18;
})

// console.log(student);

// document.getElementById("name")
// console.log("Program starts")

// setTimeout(()=>{
//     document.getElementById("name").innerText = "Hi aldy"
// },3000)

// let i = 0;
// let id = setInterval(()=>{
//     document.getElementById('name').innerText = ++ i
//     if(i ==50){
//         clearInterval(id)
//     }
// },100)


// let i =100;
// let j= 2;
// try{
//     if(j ==0){
//         throw "j cannot be zero"
//     }

// }catch(err){
//     console.log(err)
// }

var temp = document.querySelectorAll("button")
temp[1].innerText = "Hi gaick"






