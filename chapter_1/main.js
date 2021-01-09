
let array = [1,2,3,4,5];
const result = array.reduce((ac,val)=>{
  return ac + val;
});
console.log(result);
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

console.log(student);

