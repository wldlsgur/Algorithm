class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
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
                queue.push(currentNode.right);
            }
        }
    }
}

const tree = new Tree(new Node(9));

tree.root.left = new Node(3);
tree.root.right= new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

tree.display();