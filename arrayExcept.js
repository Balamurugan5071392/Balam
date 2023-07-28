//Except
function includes(array,searchElement){
    for(let i in array){
        if(i==searchElement){
            return true
            //break
        }
    }
 }
let num1 = [1,2,3,4,5,6,2,4,5]
function except(array,excluded){
    let out = []
    for(let i of array)
        if(!(excluded.includes(i)))
            out.push(i)
    return out 
}
console.log(except(num1,[1,2,5,4]))
