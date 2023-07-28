//countOccurrences

num2 = [1,2,3,3,5]
n=3
function countOccurrences(num2,n){
    return num2.reduce((accumulator,current) =>{
        let occurence = (current == n) ? 1:0
        console.log(accumulator,current,n)
        return accumulator+occurence
    },0)
}
console.log(countOccurrences(num2,n)) 
