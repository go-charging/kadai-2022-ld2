let sum = 0
for (let index = 1; index <= 1000; index = index + 1) {
    sum = sum + index
    
}
console.log(sum)

let sum2= 0
for (let index = 1; index <= 1000; index = index + 1) {
    if(index % 3 === 1){
        sum2 = sum2 + index
        console.log(index)
    }
    
}

console.log(sum2)