class Person {
    get name () {
        console.log("getter を実行中")
        return this._name
        }
    set name(value) {
        if (typeof value !=="string"){
            throw new Error("名前には文字列のみが代入できます")
        }
        console.log("setter を実行中")
        this._name = value
    }
}

const person = new Person()
person.name = "鈴木"
console.log(person.name)
console.log(person._name
    )