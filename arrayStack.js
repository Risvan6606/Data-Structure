class Stack{
    constructor(){
        this.items=[]
    }
    isEmpty(){
       return this.items.length===0
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        this.items.pop()
    }
    peek(){
        console.log(this.items[this.items.length-1])
    }
    print(){
        console.log(this.items)
    }
    size(){
        console.log(this.items.length)
    }
}
const stack=new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()
stack.peek()
stack.pop()
stack.print()
stack.peek()

