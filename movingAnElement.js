
let num2 = [1,2,3,4,5]
function move (num2,index,offset){
    if(offset+index>=num2.length)
        return 'invalid'
    else {
        let n = [...num2]
        let ele = num2.splice(index,1)[0]
        num2.splice(offset+index,0,ele)
        return num2
    }
    return num2
}
console.log(move(num2,2,-2))