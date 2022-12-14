class Person {
    constructor(name, age) {
        console.log("コンストラクタが実行されました")
        this.name = name
        this.age = age
    }
    hello() {
        console.log("こんにちは、私は" + this.name + "です")
    }
}
const tanaka = new Person("田中", 31)
const yamada = new Person("山田", 25)

console.log(tanaka)
console.log(yamada)

tanaka.hello()
console.log(tanaka.name)
yamada.hello()

class Character {
    constructor(name, energy, magic){
        this.name = name
        this.energy = energy
        this.magic = magic
    }
    kintore(){
        this.energy = this.energy + 10
    }
}
const main = new Character("主人公", 100, 50)
const nakama1 = new Character("仲間1", 150, 10)
const nakama2 = new Character("仲間2", 50, 150)
main.kintore()
nakama1.kintore()