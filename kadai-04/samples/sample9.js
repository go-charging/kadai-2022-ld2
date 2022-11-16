const fs = require("fs")

const file = fs.readFileSync("./kadai-04/hello.txt")

fs.readFile("./kadai-04/hello.txt",(err, data) => {
    console.log("ファイル読み込み完了",data)
})
console.log("readFileが呼ばれた")