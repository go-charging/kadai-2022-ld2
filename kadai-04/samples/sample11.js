const sleep = (ms) => new Promise((resolve) => {
    setTimeout(() => {resolve()}, ms)
})

const main = async () =>{
    for (let index = 0; index < 100; index++){
        console.log("hello",index)
        await sleep(100)
    }
}

main()