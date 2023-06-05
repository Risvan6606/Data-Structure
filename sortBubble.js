function bubble(array){
    if(array.length<2){
        return array
    }
    do{
        var swap=false
        for(let i=0;i<array.length;i++){
            if(array[i]>array[i+1]){
                let temp=array[i]
                array[i]=array[i+1]
                array[i+1]=temp
                swap=true
            }
        }
    }while(swap)
}
const array=[21,32,23,55,90,70,5,7]
bubble(array)
console.log(array)