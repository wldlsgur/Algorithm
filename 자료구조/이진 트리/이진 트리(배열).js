class BinaryTree {
    constructor() {
        this.array = [null];
    }

    insert(value) {
        this.array.push(value);
    }

    getLeftChild(index) {
        return this.array[2 * index];
    }

    getRightChild(index) {
        return this.array[2 * index + 1];
    }

    getParent(index) {
        return Math.floor(index / 2);
    }
}

const tree = new BinaryTree();

tree.insert(9); // root
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);

console.log(tree.array); // [null,9,5,4,7,8,5,6]
