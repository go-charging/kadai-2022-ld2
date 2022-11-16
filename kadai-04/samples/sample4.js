// {
//     const x = "hello"
//     console.log("innerScope", x)
//     {
//         const y = "hello2"
//         console.log("innerinnerScope", x)
//     }
//     console.log("innerScope",x,y)
// }
// console.log("innerScope" x)

let num
for (num = 0; num < 100; num++){
    const num_sq = num * num
    console.log(num, num_sq)
}
console.log(num)