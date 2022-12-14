class Person {
    constructor(name){
        this.name = name
    }
    hello(){
        console.log("こんにちは、私は" + this.name + "です。")
    }
    static hello(){
        console.log("こんにちは。")
    }
}

Person.hello()
const person = new Person("田中")
person.hello()