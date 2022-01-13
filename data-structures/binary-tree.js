class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        const node = new Node(value)
        if (!this.root) {
            this.root = node;
            return;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (node.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = node;
                    return;
                }

                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = node;
                    return;
                }

                currentNode = currentNode.right;
            }
        }
    }
}

const tree = new BinaryTree();

tree.add(7);
tree.add(10);
tree.add(11);
tree.add(8);
tree.add(6);
console.log(tree);