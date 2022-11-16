const number = parseInt(process.argv[2])

let isPrime = true
for(let index = 2; index < number; index++){
    if(number % index === 0){
        isPrime = false
        console.log(number, 'は', index, 'で割り切れるので素数ではありません')
        break
    }
}
if(isPrime){
    console.log(number,'は素数です')
}