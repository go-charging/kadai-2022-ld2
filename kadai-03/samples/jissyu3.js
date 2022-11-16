let sum1 = 0
let index = 1
while (index <= 1000) {
    sum1 =sum1 + index
    index = index +1
    
}
console.log(sum1)

let sum2 = 0
let index2 = 1
while (index2 <= 1000) {
    if(index2 % 3 === 1){
        console.log(index2)
        sum2 = index2 + sum2
    }
    index2 = index2 + 1
}
console.log(sum2)