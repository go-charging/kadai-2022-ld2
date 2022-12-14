class Animal{
    constructor(name){
        this.name = name
    }
    category = "animal"
}

class Cat extends Animal {
    call(){
        console.log("meow")
    }
    category = "cat"
}
class Dog extends Animal {
    call(){
        console.log("bow")
    }
}
const tama = new Cat("たま")
const taro = new Dog("たろ")
tama.call()
taro.call()
console.log(tama.category, taro.category)


class Person {
    constructor(name){
        this.name = name
    }
    hello(){
        console.log("こんにちは、私は" + this.name + "です。")
    }
}

class Student extends Person {
    constructor(name, major){
        super(name)
        this.major = major
    }
    hello() {
        console.log("こんにちは、私は" + this.name + "です。学生です。" + major + "を専攻しています。")
    }
}

const person = new Person ("田中")
const student = new Student ("田中", "数学")

person.hello()
student.hello()