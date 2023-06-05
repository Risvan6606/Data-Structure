class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    prepent(value){
        const  node =new Node(value)
        if(this.isEmpty()){
            this.head= node
        }else{
            node.next=this.head
           this.head=node
        }
        this.size++
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){                   
                prev=prev.next                
            }                                 
            prev.next=node
        }
        this.size++
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    print(){
        if(this.isEmpty()){
            console.log('your node is empty')
        }else{
            let curr=this.head
            let listvalues=''
            while(curr){
            listvalues+=`${curr.value} `
            curr=curr.next
            }
            console.log(listvalues)
        }
    }
    insert(value,index){
        if(index<0||index>this.size){
            return
        }else{
            if(index===0){
                this.prepent(value)
            }else{
                const node=new Node(value)
                let prev=this.head
                for(let i=0;i<index-1;i++){
                    prev=prev.next
                }
                node.next=prev.next
                prev.next=node
               
            }
            this.size++
        } 
    }
    removeFrom(index){
        if(index<0||index>=this.size){
            return null
        }
        let removeNode
        if(index===0){
            removeNode=this.head
            this.head=removeNode.next
            this.size--
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeNode=prev.next
            prev.next=removeNode.next
            this.size--
        }
        
        return removeNode.value
    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }else{
            if(this.head.value===value){
                this.head=this.head.next
                this.size--
                return value
            }else{
                let prev=this.head
                while(prev.next&&prev.next.value!==value){
                    prev=prev.next                
                }
                if(prev.next){
                  let  removeNode=prev.next
                    prev.next=removeNode.next
                    this.size--
                    return value
                }
                return null
            }
        }
    }
    middileFind(){
        let middile=this.head
        let mid=Math.floor(this.getSize()/2)

        for(let i=0;i<mid;i++){
            middile=middile.next
        }
        console.log(middile.value)
    }
    midFind(){
        if(this.size===0){
            return this.head
        }else{
            let fast=this.head
            let slow =this.head
            while(fast&&fast.next){
                let speed =fast.next
                fast =speed.next
                slow=slow.next
            }
            return slow.value
        }
    }
    reverse(){
        let next=null
        let prev=null
        let curr=this.head
        while(curr){
            next=curr.next
            this.head=curr
            curr.next=prev
            prev=curr
            curr=next
        }
    }
    secLarge(){
        let large=0
        let secLarge=0
        let curr=this.head
        while(curr){
            if(curr.value>large){
                large=curr.value
            }
            if(curr.value>secLarge&&curr.value!=large){
                secLarge=curr.value
            }
            curr=curr.next
        }
        return secLarge
    }
    findSecLargeEven(){
        if(this.isEmpty()){
            return 'your node is empty'
        }else{
            let large=0
            let secLarge=0
            let curr=this.head
            while(curr){
                if(curr.value%2==0&&curr.value>large){
                    large=curr.value
                }
                curr=curr.next
            }
            curr=this.head
            while(curr){
                if(curr.value%2==0&&curr.value>secLarge&&curr.value!==large)
                secLarge=curr.value
                curr=curr.next
            }
            return secLarge
        }
    }
    smallst(){
        if(this.isEmpty()){
            return 'your node is empty'
        }else{
             let small=this.head.value
             let curr=this.head
             while(curr){
                if(curr.value<small){
                    small=curr.value
                }
                curr=curr.next
             }
             return small
        }
    }

}
const link=new linkedList()
// link.append(10)
// link.append(21)
// link.append(30)
// link.append(43)
// link.append(55)
// link.insert(100,2)
// link.insert(60,5)
// console.log(link.removeFrom(5))
// console.log('this array are Empty ? '+link.isEmpty());
// console.log('array size are :'+link.getSize());
// console.log(link.removeValue(1000))
// link.print()
// link.reverse()
// link.middileFind()
// console.log(link.findSecLargeEven())
// console.log(link.secLarge());
// console.log(link.smallst())
// link.print()

