function insertion(array){
    if(array.length<2){
        return array
    }
    for(let i=1;i<array.length;i++){
        let store=array[i]
        let j=i-1
        while(j>=0&&array[j]>store){
            array[j+1]=array[j]
            j=j-1
        }
        array[j+1]=store
    }
}
const array=[21,32,23,55,90,70,5,7]
insertion(array)
console.log(array)