// try{
//     console.log(1)
//     throw new Error("ダミーのエラー")
//     console.log(2)
// }catch (error){
//     console.log("キャッチされたエラー:",error.message)
// }

const 成績計算 = (imput) => {
    if(typeof input !=="number"){
        throw new Error("不正な入力です。入力は数字である必要があります。")
    }
    return imput + 1
}
const 成績 = 成績計算("ねこ")
console.log(成績)