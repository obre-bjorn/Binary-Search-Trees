import Tree from './Tree.js'


function arrayGenerator(){
    
    let randArray = Array(20).fill().map(()=> Math.floor(Math.random() * 100) + 1) 

    let extraArray = Array(10).fill().map(() => Math.floor(Math.random()* 100) + 100)
    return {
        randArray,
        extraArray,
    }
}



let randomArray = arrayGenerator().randArray
let extraArray = arrayGenerator().extraArray

let tree = new Tree(randomArray)
tree.buildTree()
tree.prettyPrint()

// Traversing the tree
console.log(tree.levelOrderRecursive())
console.log(tree.preOrder())
console.log(tree.postOrder())
console.log(tree.inOrder())

// Unbalanceby adding extra numbers
extraArray.forEach((number)=> tree.insert(number))
tree.prettyPrint()
console.log(tree.isBalanced())


// Rebalancing the tree
tree.rebalance()
console.log(tree.isBalanced())


// Traversing the tree
console.log(tree.levelOrderRecursive())
console.log(tree.preOrder())
console.log(tree.postOrder())
console.log(tree.inOrder())




