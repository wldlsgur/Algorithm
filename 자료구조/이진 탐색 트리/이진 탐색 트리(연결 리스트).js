class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
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

    delete(value) {
        let currentNode = this.root;
        let parentNode = null;

        while(currentNode !== null) {
            // 현재 노드의 value가 찾고자 하는 값이면 해당 노드에서 멈춘다.
            if(currentNode.value === value) {
                break;
            }

            // 찾는 값이 없고 찾고자 하는 값이 현재 노드의 값보다 크면 오른쪽으로 노드를 이동
            if(currentNode.value < value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
             // 찾는 값이 없고 찾고자 하는 값이 현재 노드의 값보다 작으면 왼쪽으로 노드를 이동
            else {
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
        }

        // 삭제할 노드를 찾지 못했다면 종료
        if(currentNode === null) {
            return;
        }

        // 자식이 없는 경우
        if(!currentNode.left && !currentNode.right) {
            // 삭제할 노드가 부모의 왼쪽에 있는 경우
            if(parentNode.value > currentNode.value) {
                parentNode.left = null;
            }
            // 삭제할 노드가 부모의 오른쪽에 있는 경우
            else {
                parentNode.right = null;
            }
        }
        // 자식이 왼쪽 1개 경우
        else if(currentNode.left && !currentNode.right) {
            // 삭제할 노드가 부모의 왼쪽에 있는 경우
            if(parentNode.value > currentNode.value) {
                parentNode.left = currentNode.left;
            }
            // 삭제할 노드가 부모의 오른쪽에 있는 경우
            else {
                parentNode.right = currentNode.left;
            }
        }
        // 자식이 오른쪽 1개 경우
        else if(!currentNode.left && currentNode.right) {
            // 삭제할 노드가 부모의 왼쪽에 있는 경우
            if(parentNode.value > currentNode.value) {
                parentNode.left = currentNode.right;
            }
            // 삭제할 노드가 부모의 오른쪽에 있는 경우
            else {
                parentNode.right = currentNode.right;
            }
        }
        // 자식이 2개 경우
        else if(currentNode.left && currentNode.right) {
            // 삭제할 노드가 부모의 왼쪽에 있는 경우
            if(parentNode.value > currentNode.value) {
                let target = currentNode.right;
                let targetParent = currentNode.right;

                // target과 targetParent를 찾음.
                while (target.left) {
                    targetParent = target;
                    target = target.left;
                }

                // current의 오른쪽으로 넘어와서 target에 left가 없을 경우 targetParent와 target가 같아짐
                if (targetParent === target) {
                    parentNode.left = target;
                    target.left = currentNode.left;
                    currentNode.right = null;
                } 
                else {
                    // target에 left가 있는 경우
                    if (target.right) {
                        // target의 오른쪽이 있으면
                        targetParent.left = target.right;
                    } else {
                        // target의 오른쪽이 없으면
                        targetParent.left = null;
                    }
                    parentNode.left = target;
                    target.right = currentNode.right;
                    target.left = currentNode.left;
                }
            } 
            else {
                // 삭제할 노드가 부모의 오른쪽에 있는 경우
                let target = currentNode.right;
                let targetParent = currentNode.right;

                // target과 targetParent를 찾음.
                while (target.left) {
                    targetParent = target;
                    target = target.left;
                }

                // current의 오른쪽으로 넘어와서 target에 left가 없을 경우 targetParent와 target가 같아짐
                if (targetParent === target) {
                    parentNode.right = target;
                    target.left = currentNode.left;
                    currentNode.right = null;
                } 
                else {
                    if (target.right) {
                        // target의 오른쪽이 있으면
                        targetParent.left = target.right;
                    } 
                    else {
                        // target의 오른쪽이 없으면
                        targetParent.left = null;
                    }
                    parentNode.right = target;
                    target.right = currentNode.right;
                    target.left = currentNode.left;
                }
            }
        }
    }
}

const tree = new BinarySearchTree(new Node(9));

tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(2);
tree.delete(8);

console.log(tree.has(8)); // false;
console.log(tree.has(1)); // false;