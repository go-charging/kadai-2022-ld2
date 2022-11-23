//参照型に関するありそうなミス

const student1 = {
    score: 80,
    name: "Kamata",
}

// const student2 = student1
student2 = "Yamada"

const student3 = Object.assign({}, student2)
student3.name = "Suzuki"
console.log(student1)
console.log(student2)
console.log(student3)

const student4 = {...student3}
student4.score = 100
console.log(student4)

const student_default = {
    school:"Ritsumeikan",
    grade:2,
}
const student_a={
    ...student_default,
    name:"Kamata",
}
const student_b ={
    ...student_default,
    name: "Tanaka"
}
console.log(student_a)
console.log(student_b)

const arr1 = [0,1,2,3]
const arr2 = [10,11,12,13]
console.log([...arr1,...arr2])