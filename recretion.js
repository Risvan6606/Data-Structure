function fact(num){
    if(num<1){
        return 1
    }
    return num* fact(num-1)
}
console.log(fact(5))

function sum(num){
    if(num==1){
        return 1
    }
    return num+sum(num-1)
}
console.log(sum(10));

function feb(num){
    let arr=[0,1]
    for(let i=2;i<num;i++){
        let next=arr[i-1]+arr[i-2]
        arr.push(next)
    }
    return arr
}
console.log(feb(10))

function fem(n){
    if(n<=1){
        return n
    }
    return fem(n-1)+fem(n-2)
}
console.log(fem(10))


