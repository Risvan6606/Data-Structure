class Quee{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0
    }
    enQue(value){
        this.items.push(value)
    }
    deQue(){
        this.items.shift()
    }
    peek(){
        console.log(this.items[0])
    }
    print(){
        console.log(this.items)
    }
}
const Q=new Quee()
Q.enQue(10)
Q.enQue(20)
Q.enQue(30)
Q.enQue(40)
Q.print()
Q.peek()
Q.deQue()
Q.print()
Q.peek()
