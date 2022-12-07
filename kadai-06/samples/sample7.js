try{
    throw {greeting: "こんにちは"}
} catch (error) {
    console.log("throw されたオブジェクト：", error)
}