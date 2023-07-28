//arrayIncludes
array = [1,2,3,4,5,6]
searchElement = 5
function includes(array,searchElement){
   for(let i in array){
       if(i==searchElement){
           return true
           //break
       }
   }
}
console.log(includes(array,searchElement))
