export class Person {
    private name
    constructor(name: string){
        this.name = name
    }
    public hello(){
        console.log("こんにちは、私は" + this.name + "です。")
    }
}
const person = new Person("田中")
person.hello()
console.log(person.name)