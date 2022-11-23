const arr0 = []
const arr1 = [0, 1, 2, "aaa", "bbb"]
const arr2 = [0, 1, 2, "aaa", "bbb", {}, {a:123}, [], [true, false, true, true]]
const arr3 = [
    0,
    1,
    2,
    "aaa",
    "bbb",
    {},
    {a:123},
    [],
    [
        true,
        false,
        true,
        true,
        {
            b: "aaaa",
            c: "bbbb",
            e:{
                aaaa:123,
            }
        }
    ]
]

const obj = {
    a:1,
    b:2,
}

const arr = [
    3,
    1,
    2,
]
const good_array1 = ["","","",1,2,3]
const bad_array2 = [,,,1,2,3]

const obj4 = {
    func: () => {console.log("hello")}
}
obj4.func()