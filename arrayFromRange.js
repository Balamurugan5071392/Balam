//arrayFromRange

function arrayFromRange(min,max){
    const out = []
    for(let i=min;i<=max;i++)
        out.push(i)
    return out
 }

 let a1 = arrayFromRange(2,20)
 console.log(a1)