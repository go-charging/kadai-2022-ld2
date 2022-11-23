const birds = ["スズメ", "ドバト", "ツバメ", "カゴメ"]

// birds.forEach((bird) => {
//     const isEndsWithメ = bird.endsWith("メ")
//     console.log(bird, "メで終わる？", isEndsWithメ)
// })

const result = birds.map((bird) => {
    const isEndsWithメ = bird.endsWith("メ")
    return{
        name: bird,
        "メで終わる？": isEndsWithメ,
    }
})

console.log(birds)
console.log(result)