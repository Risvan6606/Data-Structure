function search(array,value){
    for(let i=0;i<array.length;i++){
        if(array[i]==value){
            return i+1
        }
    }
}
const array=[32,43,65,76,43]
console.log(search(array,3))