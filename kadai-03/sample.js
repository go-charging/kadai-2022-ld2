const score = 70
if(score > 80){
     console.log ("成績は優です")
}else if(score>60){
    console.log("成績は良です")
}else{
    console.log("成績は可です")
}

for(let i = 1; i < 1000; i=i *2){
    console.log(i)
}

for(let i = 0; i < 100; i=i+1){
    console.log(i)
    if(i>20){
        break
    }
}


for (let i = 0; i < 100 ; i=i+1) {
    console.log(i);
    
}

let count2 = 100
do {
    console.log('こんにちは2', count2)
    count2=count2+1
} while (count2 < 100);
console.log('カウント2',count2)