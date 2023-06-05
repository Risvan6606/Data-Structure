class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.rigth=null
    }
}
class binarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insertion(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.inserteHelp(this.root,node)
        }
    }
    inserteHelp(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.inserteHelp(root.left,newNode)
            }
        }else{
            if(root.rigth===null){
                root.rigth=newNode
            }else{
                this.inserteHelp(root.rigth,newNode)
            }
        }
    }
    search(root,target){
        if(!root){
            return false
        }else{
            if(root.value===target){
                return true
            }else if(target<root.value){
                return this.search(root.left,target)
            }else{
                return this.search(root.rigth,target)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.rigth)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.rigth)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.rigth)
            console.log(root.value)
        }
    }
    levalOrder(){
    let Quee=[]
    Quee.push(this.root)
    while(Quee.length){
        let curr=Quee.shift()
        console.log(curr.value)
        if(curr.left){
            Quee.push(curr.left)
        }
        if(curr.rigth){
            Quee.push(curr.rigth)
        }
      }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.rigth){
            return root.value
        }else{
            return this.max(root.rigth)
        }
    }
    deleteNode(root, value){
        if(root === null){
            return root
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.rigth = this.deleteNode(root.rigth,value)
        }else {
            if(!root.left && !root.rigth){
                return null
            }

            if(!root.left){
                return root.rigth
            }else if(!root.rigth){
                return root.left
            }

            root.value = this.min(root.rigth)
            root.rigth = this.deleteNode(root.rigth,root.value)
        }
        return root
    }
    findClousest(target){
        let clouse=this.root.value
        let curr=this.root
        while(curr!==null){
        if(Math.abs(target-curr.value)<Math.abs(target-clouse)){
            clouse=curr.value
        }
        if(target<curr.value){
            curr=curr.left
        }else if(target>curr.value){
            curr=curr.rigth
        }else{
            return curr.value
        }
    }
    return clouse
    }
}
const searchTree=new binarySearchTree()
console.log('your node is empty ?'+searchTree.isEmpty())
searchTree.insertion(10)
searchTree.insertion(15)
searchTree.insertion(5)
searchTree.insertion(3)
searchTree.insertion(7)
searchTree.deleteNode(searchTree.root,5)
searchTree.preOrder(searchTree.root)
// console.log('hai');
// console.log(searchTree.findClousest(4))
// console.log('2nd')
// searchTree.inOrder(searchTree.root)
// console.log('3nd')
// searchTree.postOrder(searchTree.root)
// searchTree.levalOrder()
// console.log(searchTree.min(searchTree.root))
// console.log(searchTree.max(searchTree.root))
// console.log(searchTree.search(searchTree.root,18))
