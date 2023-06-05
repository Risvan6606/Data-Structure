class Node{
    constructor(){
        this.childern={}
        this.isWord=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    trie(word){
        this.populateSuffix(word)
    }
    populateSuffix(word){
        for(let i=0;i<word.length;i++){
            this.insertSubstringStarting(i,word)
        }
    }
    insertSubstringStarting(index,word){
        let current=this.root
        for(let i=index;i<word.length;i++){
            let char=word[i]
            if(!current.childern[char]){
                current.childern[char]=new Node()
            }
            current=current.childern[char]
           
        }
        current.isWord=true
    }
    contains(word){
       let current=this.root
       for(let i=0;i<word.length;i++){
        let char=word[i]
        if(!current.childern[char]){
            return false
        }
        current=current.childern[char]
       }
       return current.isWord
    }
    startsWith(prefix){
        let current=this.root
        for(let i=0;i<prefix.length;i++){
            let char=prefix[i]
            if(!current.childern[char]){
                return false
            }
            current=current.childern[char]
        }
        return true
    }
}
const tey=new Trie()
tey.trie('manna')
console.log(tey.contains('ma'))
console.log(tey.startsWith('ma'))