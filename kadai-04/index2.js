setTimeout(()=>{
    console.log("hello")
    setTimeout(
        ()=>{
            console.log("Bye")
        },2000
    )},3000)