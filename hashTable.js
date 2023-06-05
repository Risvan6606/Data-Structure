class hashTable{
    constructor(size){
        this.items=new Array(size)
        this.size=size
    }
    hash(key){
        let result=0
        for(let i=0;i<key.length;i++){
            result+=key.charCodeAt(i)
        }
        return result%this.size
    }
    set(key,value){
        const index=this.hash(key)
        const bucket=this.items[index]
        if(!bucket){
            this.items[index]=[[key,value]]
        }else{
            const samekeyItem=bucket.find(item=>item[0]===key)
            if(samekeyItem){
                samekeyItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index=this.hash(key)
        const bucket=this.items[index]
        if(bucket){
            const sameKeyItem=bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    remove(key){
        const index=this.hash(key)
        const bucket=this.items[index]
        if(bucket){
            const sameKeyItem=bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.items.length;i++){
            if(this.items[i]){
                console.log(i,this.items[i])
            }
        }
    }
}
const hash=new hashTable(50)
hash.set('namer','Galfan')
hash.set('age',24)
hash.set('place','arakkinar')
// hash.set('ram','ramanan')
hash.set('mane','risvan')
console.log(hash.get('mane'))
// hash.display()
// hash.remove('place')
hash.display()



