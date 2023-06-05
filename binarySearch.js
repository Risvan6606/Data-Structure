function binary(target){
    const arr=[10,20,30,40,50,60,70]
    let left=0
    let right=arr.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]===target){
            return mid
        }else if(arr[mid]<target){
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return 'value not founded in the array ?'
}
console.log(binary(100))