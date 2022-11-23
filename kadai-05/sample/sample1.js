const obj = {
    myKey :456,
    "myKey":456,
    'my-Key':123,
    '123hello':"world",
    'm&m':'chocolate'
}

console.log(obj.myKey)
console.log(obj["myKey"])

console.log(obj["my-Key"])

let key = "123hello"
console.log(obj[key])
key = "my-Key"
console.log(obj[key])

const hello123 = "myKey"
console.log(obj.hello123)
console.log(obj[hello123])

//console.log(obj.xyz.abc)