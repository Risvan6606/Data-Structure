function Quick(array){
    if(array.length<2){
        return array
    }
    let pvt=array[array.length-1]
    let leftArray=[]
    let rigthArray=[]
    for(let i=0;i<array.length-1;i++){
        if(array[i]<pvt){
            leftArray.push(array[i])
        }else{
            rigthArray.push(array[i])
        }
    }
    return [...Quick(leftArray),pvt,...Quick(rigthArray)]
}
const array=[21,32,23,55,90,70,5,7]

console.log(Quick(array))