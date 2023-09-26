class BinaryTree {
    constructor() {
        this.array = [null];
    }

    getLeftChildIndex(index) {
        return index * 2;
    }

    getRightChildIndex(index) {
        return (index * 2) + 1;
    }

    getParentIndex(index) {
        return Math.floor(index / 2);
    }

    insert(value) {
        if(!value) {
            return;
        }

        this.array.push(value);
    }

    /* 전위 순회 */
    preorderTraverse(currentIndex = 1) {
        const leftChildIndex = this.getLeftChildIndex(currentIndex);
        const rightChildIndex = this.getRightChildIndex(currentIndex);
        let result = `${this.array[currentIndex]} -> `;

        if(leftChildIndex < this.array.length) {
            result += this.preorderTraverse(leftChildIndex);
        }
        if(rightChildIndex < this.array.length) {
            result += this.preorderTraverse(rightChildIndex);
        }

        return currentIndex === 1 ? result.slice(0, -4) : result;
    }

    /* 중위 순회 */
    inorderTraverse(currentIndex = 1) {
        const leftChildIndex = this.getLeftChildIndex(currentIndex);
        const rightChildIndex = this.getRightChildIndex(currentIndex);
        let result = "";

        if(leftChildIndex < this.array.length) {
            result += this.inorderTraverse(leftChildIndex);
        }

        result += `${this.array[currentIndex]} -> `;

        if(rightChildIndex < this.array.length) {
            result += this.inorderTraverse(rightChildIndex);
        }

        return currentIndex === 1 ? result.slice(0, -4) : result;
    }

    /* 후위 순회 */
    postorderTraverse(currentIndex = 1) {
        const leftChildIndex = this.getLeftChildIndex(currentIndex);
        const rightChildIndex = this.getRightChildIndex(currentIndex);
        let result = "";

        if(leftChildIndex < this.array.length) {
            result += this.postorderTraverse(leftChildIndex);
        }
        if(rightChildIndex < this.array.length) {
            result += this.postorderTraverse(rightChildIndex);
        }

        result += `${this.array[currentIndex]} -> `;

        return currentIndex === 1 ? result.slice(0, -4) : result;
    }
}

const tree = new BinaryTree();

tree.insert(9); // root 노드
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);

console.log(tree.array);

console.log("preorder result : ", tree.preorderTraverse(1));
console.log("inorder result : ", tree.inorderTraverse(1));
console.log("postorder result : ", tree.postorderTraverse(1));