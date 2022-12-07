// 0. (準備)data.jsonを用意して、count: 0をセット
// 1. 0 を読み込んでJSON -> JavaScript Object にパースする
// 2. 1でエラーが出たら、終了
// 3. 1でエラーがでなかったら、
    // 3-(1) count に1を足す
    // 3-(2) オブジェクトに　updateAtというプロパティを足して現在時刻を
// 4. オブジェクトを、JSON に変換して、data.jsonとして上書き保存

const fs = require('fs')
const json = fs.readFileSync('./kadai-06/data.json').toString()

let object
try {
    object = JSON.parse(json)
} catch (error) {
    console.log('不正な JSON フォーマットです')
    process.exit(1)
}


object.count = object.count + 1
object.updateAt = Date()
console.log(JSON.stringify(object))
fs.writeFileSync(
    './kadai-06/data.json',
    JSON.stringify(object, null, 2)
    )