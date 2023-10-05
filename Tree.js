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
tree.deleteNode(23)
tree.prettyPrint()

