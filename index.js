function depthFirstSearch (rootNode, vertices, edges){

    function findAdjacentNodes(rootNode, vertices, edges){
            let adjacentNodeNames = [];
            let i;
            for (i = 0; i < edges.length; i++){
                if(edges[i].includes(rootNode)){
                    if(edges[i][0] === rootNode){
                    adjacentNodeNames.push(edges[i][1])
                    }
                    else{
                        adjacentNodeNames.push(edges[i][0])
                    }
                }
            }
            let adjacentNodes = [];
            for (let t = 0; t < vertices.length; t++){
                if (adjacentNodeNames.includes(vertices[t].name)){
                    if(vertices[t].discovered === null)
                    adjacentNodes.push(vertices[t]);
                    vertices[t].discovered = true;
                }
                else if (vertices[t].name === rootNode){
                    vertices[t].discovered = true;
                }
            }
            return adjacentNodes;
        }

    let theQueue = [];

    let finalArray = [];

    theQueue.push(rootNode);
    finalArray.push(rootNode); 

    let i;

    while(theQueue.length > 0){
        
            let arrayForQueue = findAdjacentNodes(theQueue[theQueue.length - 1].name, vertices, edges);
            theQueue.pop();  
            for(i = 0; i < arrayForQueue.length; i++){
            theQueue.push(arrayForQueue[i]);
            finalArray.push(arrayForQueue[i])
            }
    }
    return finalArray;   
}

// let edges = [
// 	['14th&6th', '23rd&6th'],
// 	['23rd&6th', '34th&6th'],
// 	['34th&6th', '28th&Bwy'],
// 	['28th&Bwy', '23rd&Bwy'],
// 	['23rd&Bwy', '14th&Lex'],
// 	['14th&Lex', '23rd&Lex']
// ]

// let vertices = [
//   {name: '34th&6th', discovered: null},
//   {name: '23rd&6th', discovered: null},
//   {name: '14th&6th', discovered: null},
//   {name: '28th&Bwy', discovered: null},
// 	{name: '23rd&Bwy', discovered: null},
//   {name: '14th&Lex', discovered: null},
// 	{name: '23rd&Lex', discovered: null}
// ]