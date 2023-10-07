import Node from "./Node.js"
import mergeSort from "./mergeSort.js"

class Tree {
    constructor(){
        this.root = null
    }

    buildTree(array){

        if(!array.length){
            return null
        }
        

        let mid = parseInt(array.length/2)
        let node = new Node(array[mid])
        
        node.left = this.buildTree(array.slice(0,mid))
        node.right = this.buildTree(array.slice(mid+1))
        
        this.root = node
        return this.root
    }


    find(value,root=this.root){
        if(root === null){
            return -1
        }
 
        if(value == root.data ){
            return root
        }
        if(value > root.data){
            return this.find(value,root.right)
        }else{
            return this.find(value,root.left)
        }
        
    }


    levelOrder(root = this.root){

        if (root == null) return;

        let result = []
        let queue = []
        queue.push(root)

        while(queue.length > 0){
            let node = queue.shift()
            
            
            if(node.left !== null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)
            
            result.push(node.data)  

    }

    return result
    
}

    height(node = this.root){

        if(node === null) return -1

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        // Return the maximum height of left or right subtree plus 1 (counting the current edge)
        
        
        console.log(leftHeight, rightHeight)


        return Math.max(leftHeight, rightHeight) + 1;

    }

    depth(data){

        let node = this.find(data)

        let deep = 0

       function traverse(root){
            
            if (node.data === -1){
                return -1
            }
    

            if(node.data === root.data){
                return 
            }

            if(node.data > root.data){
                deep++
                traverse(root.right)
            }else{
                deep++
                traverse(root.left)
            }
        }

            traverse(this.root)
            return deep


    }

    levelOrderRecursive(root= this.root){

        let result = []

        function traverse (node, level){

            if(node === null) return;

            if(!result[level]){
                result[level] = []
            }

            result[level].push(node.data)
            
            traverse(node.left, level+1)
            traverse(node.right, level+1)
        }


        traverse(root,0)

        return result
    }
    

    inOrder(callback){

        let result = []

        function traverse(node){

            if (node === null) return

            traverse(node.left)

            if(callback){
                callback(node)
            }else{
                result.push(node.data)
            }

            traverse(node.right)
        }


        traverse(this.root)


        return result
    }

    preOrder(callback){

        let result = []

        function traverse(node){

            if (node === null) return ;

            if(callback){
                callback(node)

            }else{

                result.push(node.data)
            }

            traverse(node.left)
            traverse(node.right)

        }
        traverse(this.root)

        return result

    }


    postOrder(callback){
        let result = []

        function traverse(node){

            if(node === null) return

            traverse(node.left)
            traverse(node.right)

            if(callback){
                callback(node)
            }else{
                result.push(node.data)
            }

        }


        traverse(this.root)
        return result

    }



    insert(value,root=this.root){
        
        if(root == null){
            root = new Node(value)
            // console.log(this.prettyPrint())
            return root
        }

        if (value > root.data){
           root.right =  this.insert(value,root.right)
        }else if(value < root.data){
            root.left = this.insert(value,root.left)
        }

        return root

        // const node = new Node(value);

    }

    deleteNode(value, root=this.root){

        if(root == null){
            return root
        }

        if(root.data > value){
            console.log(root)
            root.left = this.deleteNode(value, root.left)
            return root
        }else if (root.data < value ){
            console.log(root)
            root.right = this.deleteNode(value, root.right)
            return root
        }

        if(root.left === null){
           let temp = root.right 
           return temp
        }   
        else if(root.right === null){
            let temp = root.left
            return temp
        }
        else{

           let  parentNode = root
           let takeOverNode = root.right

           while(takeOverNode.left){
                parentNode = takeOverNode
                takeOverNode = takeOverNode.left
           }


           if(parentNode != root){
                parentNode.left = takeOverNode.right

           }else{
             parentNode.right = takeOverNode.right

           }

           root.data = takeOverNode.data

           return root
           
        }

    }

     prettyPrint (node=this.root, prefix = "", isLeft = true){
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    };
}



let tree = new Tree()
let unsortedArray = [23,4,56,7,687]
let sortedArray = mergeSort(unsortedArray)
tree.buildTree(sortedArray)
tree.prettyPrint()
tree.insert(3)
tree.insert(5)
tree.insert(6)
tree.prettyPrint()
console.log("-----------When Deleted-----------\n\n\n");
// tree.deleteNode(23)
console.log(tree.find(5))
tree.levelOrder()
// tree.prettyPrint()
console.log(tree.inOrder())
console.log(tree.preOrder())
console.log(tree.postOrder())
console.log(tree.height());
console.log(tree.depth(687));
