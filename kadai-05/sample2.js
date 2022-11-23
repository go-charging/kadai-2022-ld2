const obj = {
    myKey: 456,
    "my-key": 123,
    hello123: "world",
    "123hello": "world"
    'm&m': 'chocolate'
}

console.log(obj.myKey)
obj.myKey="こんにちは"
console.log(obj)
obj.xyz="新しい値"
console.log(obj)

delete obj.hello123
delete obj.
console.log(obj)