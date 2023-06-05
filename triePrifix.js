class Node{
  constructor(){
      this.childern={}
      this.end=false
  }
}
class Trie{
  constructor(){
      this.root=new Node()
  }
  prifix(word){
      for(let i=0;i<=word.length-1;i++){
          this.populatePrifix(i,word)
      }
  }
  populatePrifix(length,word){
      let current=this.root
      for(let i=0;i<=length;i++){
          let char=word[i]
          if(!current.childern[char]){
              current.childern[char]=new Node()
          }
         current=current.childern[char]
      }
      current.end=true
  }
  contain(word){
      let current=this.root
      for(let i=0;i<word.length;i++){
          let char=word[i]
          if(!current.childern[char]){
              return false
          }
          current=current.childern[char]
      }
     return current.end
  }    
}
const re=new Trie()
re.prifix('risvan')
console.log(re.contain('van'))