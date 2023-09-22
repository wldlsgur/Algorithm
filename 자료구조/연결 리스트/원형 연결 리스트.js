class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
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
            newNode.next = this.head;
        }
        else {
            newNode.next = this.tail.next;
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

        if (currNode !== null) {
            do {
                displayString += `${currNode.value}, `;
                currNode = currNode.next;
            } while(currNode !== this.head);
        }

        displayString = displayString.substr(0, displayString.length - 2);
        displayString += "]";
        
        console.log(displayString);
    }
}

const circularLinkedList = new CircularLinkedList();

circularLinkedList.append(1);
circularLinkedList.append(2);
circularLinkedList.append(3);
circularLinkedList.append(5);
circularLinkedList.display();
console.log(circularLinkedList.find(3));
circularLinkedList.remove(3);
circularLinkedList.display();
circularLinkedList.insert(circularLinkedList.find(2), 10);
circularLinkedList.display();
console.log(circularLinkedList.size());
