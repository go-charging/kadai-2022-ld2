console.log("Hello!")
try{
    JSON.parse('{"こんにちは":"世界"')

}catch (error){
    console.log("[ERROR] エラーが発生しました。無視して処理を継続します。")
    console.log("エラーの内容", error)
    if(error.message.startsWith("SyntaxError")){
        console.log("シンタックスエラーです！")
    }
}
console.log("Bye!")