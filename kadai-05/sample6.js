const fishes = ["アジ","サバ", "ヒラメ", "マグロ", "ブリ", "カレイ", "サケ"]
const sliced1 = fishes.slice(2,5)
console.log(sliced1,fishes)

const fishes2 = ["アジ","サバ", "ヒラメ", "マグロ", "ブリ", "カレイ", "サケ"]
const spliced1 = fishes2.splice(3,1)
console.log(spliced1, fishes2)

const fishes3 = ["アジ","サバ", "ヒラメ", "マグロ", "ブリ", "カレイ", "サケ"]
const spliced2 = fishes3.splice(3,2, "鮎", "鱸", "鯛")
console.log(spliced2, fishes3)