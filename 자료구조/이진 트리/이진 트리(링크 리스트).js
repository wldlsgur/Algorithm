class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(node) {
        this.root = node;
    }
    
    display() {
        const queue = [];

        queue.push(this.root);

        while(queue.length > 0) {
            const currentNode = queue.shift();

            console.log(currentNode.value);

            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right) {
                queue.push(currentNode.push(currentNode.right));sc
            }
        }
    }
}

const tree = new Tree(new Node(9));

tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left  = new Node(2);
tree.root.left.right = new Node(5);