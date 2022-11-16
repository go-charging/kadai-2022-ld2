const func1 = function(){
    console.log("function キーワード", this)//コンテキスト
}

const func2 = () => {
    console.log("アロー関数" , this)
}

func1.apply("こんにちは")
func2.apply("こんにちは")