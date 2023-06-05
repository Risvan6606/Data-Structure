class Queue{
    constructor(){
        this.object={}
        this.rear=0
        this.frond=0
    }
    isEmpty(){
        return this.rear-this.frond===0
    }
    enqueue(element){
        this.object[this.rear]=element 
        this.rear++
    }
    dequeue(){
        // const item=this.object[this.frond]
        delete this.object[this.frond]
        this.frond++
        // return item
    }
    print(){
        console.log(this.object)
    }
    peak(){
        return this.object[this.frond]
    }
    size(){
       
        return this.rear-this.frond
    }
}
const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()
queue.dequeue()
// console.log(queue.dequeue())
queue.print()
// console.log(queue.peak())
console.log(queue.size())


