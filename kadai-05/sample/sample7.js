const animals = ["ネコ", "イヌ", "ウサギ"]
for (let index = 0; index < animals.length; index++){
    const animal = animals[index];
    console.log(index, animal);
}


for (const animal of animals) {
    console.log(animal)
}