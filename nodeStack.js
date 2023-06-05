class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class stack{
    constructor(){
        this.top=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    push(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.top=node
        }
        else{
            node.next=this.top
            this.top=node
        }
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            console.log("unflow stack");
        }
        else{
            this.top=this.top.next
        }
    }
    peak(){
        if(this.isEmpty()){
            console.log('your node is empty')
        }else{
            console.log(this.top.value)
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("unflow stack");
        }
        else{
            let curr=this.top
            while(curr){
                console.log(curr.value);
                curr=curr.next
            }
        }
    }
}
const list=new stack()

list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.pop()
list.pop()
list.peak()
list.print()