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
    
    insert(value) {
        const newNode = new Node(value);

        // 루트노드가 생성되지 않았으면 루트 노드로 지정
        if(this.root === null) {
            return this.root = newNode;
        }

        let currentNode = this.root;

        // 루트를 기준으로 크면 오른쪽 작으면 왼쪽으로 루트를 변경하면서 자기 자리를 찾아간다.
        while(currentNode !== null) {
            // 현재 루트 노드보다 크면
            if(currentNode.value < value) {
                //  right에 아무런 노드가 없다면 right를 가르키고 종료
                if(currentNode.right === null) {
                    currentNode.right = newNode;
                    break;
                }
                // right에 노드가 더 있다면 그 노드를 루트로 재 탐색
                currentNode = currentNode.right;
            }
            // 현재 루트 노드보다 작으면
            else {
                // left에 아무런 노드가 없으면 left를 가르키고 종료
                if(currentNode.left === null) {
                    currentNode.left = newNode;
                    break;
                }
                // left에 노드가 더 있다면 그 노드를 루트로 재 탐색
                currentNode = currentNode.left;
            }
        }
    }

    has(value) {
        let currentNode = this.root;

        // 현재 노드가 null이 아닐때 까지 반복해서 찾는다.
        while(currentNode !== null) {
            // 현재 노드의 value가 찾고자 하는 값이면 true 반환
            if(currentNode.value === value) {
                return true;
            }

            // 찾는 값이 없고 찾고자 하는 값이 현재 노드의 값보다 크면 오른쪽으로 노드를 이동
            if(currentNode.value < value) {
                currentNode = currentNode.right;
            }
             // 찾는 값이 없고 찾고자 하는 값이 현재 노드의 값보다 작으면 왼쪽으로 노드를 이동
            else {
                currentNode = currentNode.left;
            }
        }

        // 더이상 탐색할 노드가 없으면 false를 반환
        return false;
    }
}

const tree = new Tree(new Node(9));

tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(2);

console.log(tree.has(8)); // true;
console.log(tree.has(1)); // false;