class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    find(value) {
        let currNode = this.head;

        while(currNode.value !== value) {
            currNode = currNode.next;
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
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    insert(node, newValue) {
        if(!node?.value || ! newValue) {
            return;
        }

        const newNode = new Node(newValue);

        newNode.next = node.next;
        node.next = newNode;
    }

    remove(value) {
        let prevNode = this.head;

        while(prevNode.next.value !== value) {
            prevNode = prevNode.next;
        }

        if(prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
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
            currNode = currNode.next;
        }

        return size;
    }

    display() {
        let currNode = this.head;
        let displayString = "[";

        while(currNode !== null) {
            displayString += `${currNode.value}, `;
            currNode = currNode.next;
        }

        displayString = displayString.substr(0, displayString.length - 2);
        displayString += "]";
        
        console.log(displayString);
    }
}

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.append(1);
singlyLinkedList.append(2);
singlyLinkedList.append(3);
singlyLinkedList.append(5);
singlyLinkedList.display();
console.log(singlyLinkedList.find(3));
singlyLinkedList.remove(3);
singlyLinkedList.display();
singlyLinkedList.insert(singlyLinkedList.find(2), 10);
singlyLinkedList.display();
console.log(singlyLinkedList.size());
