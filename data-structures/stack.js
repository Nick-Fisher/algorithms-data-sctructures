class StackNode {
    constructor(prev, data) {
        this.prev = prev;
        this.data = data;
    }
}

class Stack {
    constructor() {
        this.last = null;
    }

    add(data) {
        this.last = new StackNode(this.last, data);
    }

    pop() {
        let lastElement;
        if (this.last !== null) {
            lastElement = this.last.data;
            this.last = this.last.prev;
        }

        return lastElement;
    }

    showStack() {
        console.log('STACK', this.last)
    }
}


const stack = new Stack();

stack.add(5)
stack.add(3)
stack.pop();
stack.showStack();
