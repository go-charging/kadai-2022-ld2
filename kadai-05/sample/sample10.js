 const a = {
     x: 1,
     y: 2,
 }
 const b = a
 console.log("a:",a)
 console.log("b:",b)
 b.x = 10
 console.log("a:",b)
 console.log("b:",a)


let name1 = "tama"
console.log(name1)
let name2 = name1
console.log(name2)
name2 = "pochi"
console.log(name2)
console.log(name1)

const arr1 = ["tama", "pochi", "mike"]
console.log(arr1)
const arr2 = arr1
console.log(2, arr2)
arr2[1] = "POCHI"
console.log(2,"changed",arr2)
console.log(1,"changed",arr1)

//関数型の参照
const func1 = () => { console.log("Hello")}
func1()
const func2 = func1
func2.test = "test"
console.log(func2.test)
console.log(func1.test)