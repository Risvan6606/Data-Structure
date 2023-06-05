class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class queue{
    constructor(){
        this.front=null
        this.rear=null
    }
    enqueue(value){
        const node=new Node(value)
        if(!this.front){
            this.front=node;
            this.rear=node
        }
        else{
            this.rear.next=node
            this.rear=node
        }
    }
    dequeue(){
        if(!this.front){
            console.log("empty");
        }
        else{
            this.front=this.front.next
        }
    }
    print(){
        if(!this.front){
            console.log("empty");
        }
        else{
            let listValues=''
            let temp=this.front
            while(temp){
                listValues+=`${temp.value} `
                temp=temp.next
            }
            console.log(listValues)
        }
    }
}
const list =new queue()

list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
list.enqueue(40)
list.enqueue(50)
list.dequeue()
list.dequeue()
list.dequeue()
list.print()