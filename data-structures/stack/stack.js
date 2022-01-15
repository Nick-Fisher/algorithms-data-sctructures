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

// class Stack {
//     constructor() {
//         this.last = null;
//     }

//     push(item) {
//         const prev = this.last;
//         const element = {prev, item};
//         this.last = element;
//     }

//     pop() {
//         const element = this.last;
//         if (!element) {
//             return null;
//         }

//         this.last = element.prev;
//         return element.item;
//     }
// }