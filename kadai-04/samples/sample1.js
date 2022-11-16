function hello(){
    console.log("hello")
    console.log("hello")
    console.log("hello")
}

hello()

function greet(name){
    console.log("こんにちは、" + name + "さん")
}
greet("田中")
greet("佐藤")

function greet2(firstName, lastName){
    console.log("こんにちは" + firstName + " " +lastName + "さん")
}
greet2("太郎","田中")

function add(a, b){
    console.log(a+b)
}
add(100,10000)

function add2(a,b){
    return a+b
}
const result = add2(500,20000)
console.log("関数の戻り値の結果:", result)

function afterReturnTest(){
    console.log(1)
    return
    console.log(2)
}
afterReturnTest()