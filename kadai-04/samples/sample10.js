//setTimeoutやSetIntervalをキャンセル

const timerId = setInterval(()=> {
    count = count + 1
    console.log("Hello")
    if(count > 20) {
        clearInterval(timerId)
    }
},100)