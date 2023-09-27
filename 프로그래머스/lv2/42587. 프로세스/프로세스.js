function solution(priorities, location) {
    const queue = new Queue();

    for(let i=0 ; i<priorities.length ; i++) {
        queue.enqueue([priorities[i], i]);
    }

    // 우선순위가 가장 수치를 파악하기 위한 정렬
    priorities.sort((a, b) => b - a); 

    let count = 0;

    while(queue.size > 0) {
        const currentValue = queue.peek();

        if(currentValue[0] < priorities[count]) {
            queue.enqueue(queue.dequeue());
        }
        else {
            const value = queue.dequeue();

            count ++;

            if(location === value[1]) {
                return count;
            }
        }
    }

    return count;
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(newValue) {
        const newNode =  new Node(newValue);

        if(this.head === null) {
            this.head = this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size += 1;
    }

    dequeue() {
        const value = this.head.value;

        this.head = this.head.next;
        this.size -= 1;

        return value;
    }

    peek() {
        return this.head.value;
    }
}

console.log(solution([2, 1, 3, 2], 2));