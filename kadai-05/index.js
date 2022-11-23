const profile = {
    name: "Takeshi",
    age: 20,
    hobby: "Movie",
    major: "economics",
    pet: "cat"
}

const dictionary = {
    name: "名前",
    age: "年齢",
    hobby: "趣味",
    major: "専攻",
    pet: "ペット"
}


const keys = Object.keys(profile)
for (const key of keys) {
    const subject = dictionary[key]
    const value = profile[key]
    console.log("私の" + subject + "は" + value + "です")
}