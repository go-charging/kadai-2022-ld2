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
