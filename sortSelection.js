function selection(array){
    if(array.length<2){
        return array
    }
    for(let i=0;i<array.length;i++){
        let small=i
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[small]){
                small=j
            }
        }
        if(i!==small){
            let temp=array[small]
            array[small]=array[i]
            array[i]=temp
        }
    }
}
const array=[21,32,23,55,90,70,5,7]
selection(array)
console.log(array)