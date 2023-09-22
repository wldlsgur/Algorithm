class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    find(value) {
        let currNode = this.head;

        while(currNode.value !== value) {
            currNode = currNode.right;
        }

        return currNode;
    }

    append(newValue) {
        if(!newValue) {
            return;
        }

        const newNode = new Node(newValue);

        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.left = this.tail;

            this.tail.right = newNode;
            this.tail = newNode;
        }
    }

    insert(node, newValue) {
        if(!node?.value || ! newValue) {
            return;
        }

        const newNode = new Node(newValue);

        node.right.left = newNode;
        newNode.right = node.right;
        newNode.left = node;
        node.right = newNode;
    }

    remove(value) {
        let prevNode = this.head;

        while(prevNode.right.value !== value) {
            prevNode = prevNode.right;
        }

        if(prevNode.right !== null) {
            prevNode.right.left = null;
            prevNode.right.right.left = prevNode;
            prevNode.right = prevNode.right.right;
            prevNode.right.right = null;
        }
    }

    size() {
        let size = 1;
        let currNode = this.head;

        if(!currNode) {
            return 0;
        }

        while(currNode !== this.tail) {
            size++;
            currNode = currNode.right;
        }

        return size;
    }

    display() {
        let currNode = this.head;
        let displayString = "[";

        while(currNode !== null) {
            displayString += `${currNode.value}, `;
            currNode = currNode.right;
        }

        displayString = displayString.substr(0, displayString.length - 2);
        displayString += "]";
        
        console.log(displayString);
    }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
doublyLinkedList.append(5);
doublyLinkedList.display();
console.log(doublyLinkedList.find(3));
doublyLinkedList.remove(3);
doublyLinkedList.display();
doublyLinkedList.insert(doublyLinkedList.find(2), 10);
doublyLinkedList.display();
console.log(doublyLinkedList.size());
