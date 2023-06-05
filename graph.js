class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }


    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }


    hasEdge(vertax1,vertax2){
        return (
            this.adjacencyList[vertax1].has(vertax2)&&
            this.adjacencyList[vertax2].has(vertax1)
        )
    }


    removeEdge(vertax1,vertax2){
        this.adjacencyList[vertax1].delete(vertax2)
        this.adjacencyList[vertax2].delete(vertax1)
    }
    dfs(startVertex) {
        let stack = []
        let visited = {}

        visited[startVertex] = true
        stack.push(startVertex)

        while (stack.length) {
            let curr = stack.pop()
            console.log(curr);
            for (let neighbor of this.adjacencyList[curr]) {
                if (visited[neighbor] == null) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            }
        }
    }
        bfs(startVertex) { 
        const visited = {};
        const queue = [];

        visited[startVertex] = true;
        queue.push(startVertex);

        while (queue.length) {
            const curr = queue.shift();
            console.log(curr);

            for (const neighbor of this.adjacencyList[curr]) {
                if (visited[neighbor]==null) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
    removeVertax(vertax){
        if(!this.adjacencyList[vertax]){
            return
        }
        for(let adjecentVertax of this.adjacencyList[vertax]){
            console.log(adjecentVertax+' evertacil ull edej pokkunnu')
            this.removeEdge(vertax,adjecentVertax)
        }
        delete this.adjacencyList[vertax]
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+'-->'+[...this.adjacencyList[vertex]])
        }
    }
}
const graph=new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addEdge('C','B')
// graph.addEdge('C','D')
// graph.addEdge('B','D')
// graph.addEdge('C','D')
// graph.addEdge('B','D')
// graph.removeEdge('B','C')
// graph.removeEdge('A','B')
// graph.removeVertax('B')
// graph.dfs('B')
graph.dfs('A')
// graph.display()
