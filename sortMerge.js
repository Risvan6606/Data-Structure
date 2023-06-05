function sortMerge(array){
    if(array.length<2){
        return array
    }
    let mid=Math.floor(array.length/2)
    let leftArray=array.slice(0,mid)
    let rigthArray=array.slice(mid)
    return sort(sortMerge(leftArray),sortMerge(rigthArray))
}
function sort(leftArray,rigthArray){
    let sortArray=[]
    while(leftArray.length&&rigthArray.length){
        if(leftArray[0]<=rigthArray[0]){
            sortArray.push(leftArray.shift())
        }else{
            sortArray.push(rigthArray.shift())
        }
    }
    return [...sortArray,...leftArray,...rigthArray]
}
const array=[21,32,23,55,90,70,5,7]
console.log(sortMerge(array))