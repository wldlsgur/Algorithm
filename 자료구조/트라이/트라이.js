class Node {
    constructor(value = "", isInclude) {
        this.value = value;
        this.children = new Map();
        this.isInclude = isInclude
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(string) {
        let currentNode = this.root;

        for(const char of string) {
            const str = currentNode.value + char;
            // 현재 노드에서 해당 문자로 시작하는 자식이 없다면
            if(!currentNode.children.has(char)) {
                // 현재 노드 자식으로 문자를 키로 현재 노드 값과 현재 문자 값을 더해 새 노드를 생성한다.
                currentNode.children.set(char, new Node(str, str === string));
            }

            //키가 있다면 이동만 한다.
            currentNode = currentNode.children.get(char);
        }
    }

    has(string) {
        let currentNode = this.root;

        for(const char of string) {
            if(!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char);
        }

        return true;
    }

    /* 문자열 자동 완성 */
    autoComplete(string) {
        const result = [];
        const queue = [];
        let currentNode = this.root;

        // 입력받은 문자열까지 이동
        for(const char of string) {
            // 해당 문자열이 트라이에 없다면 빈 배열 반환
            if(!currentNode.children.has(char)) {
                return [];
            }
            currentNode = currentNode.children.get(char);
        }

        // 자기 자신 큐에 추가
        queue.push(currentNode);

        while(queue.length > 0) {
            const { value, children, isInclude } = queue.shift(); // { 문자열 값, 자식 문자열 리스트, 입력한 문자열이 맞는지 }

            // 입력한 문자열이 맞다면 결과에 추가
            if(isInclude) {
                result.push(value);
            }

            // 자식 문자열을 모두 enqueue
            for(const [_, nextNode] of children) {
                queue.push(nextNode);
            }
        }

        return result;
    }
}

const trie = new Trie();

trie.insert("to");
trie.insert("te");
trie.insert("tea");
trie.insert("ted'");
trie.insert("ten");

// console.log(trie.has("to")); // true
// console.log(trie.has("te")); // true
// console.log(trie.has("tea")); // true 

console.log(trie.autoComplete("t")); // [ 'to', 'te', 'tea', 'ten', "ted'" ]