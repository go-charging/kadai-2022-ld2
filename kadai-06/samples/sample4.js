const me = {
    name:"小太郎",
    parent:{
        name:"太郎",
        children:[]
    }
}
me.parent.children.push(me)
JSON.stringify(me)
console.log(me)