
// ' * + 2 2 3 '

const operations = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '/': (a: number, b: number) => a / b,
    '*': (a: number, b: number) => a * b,
}

export const polishNotation = (str: string) => {
    const elements: Array<any> = str.trim().split(' ');
    const stack = [];
    console.log('elems', elements)
    while (elements.length) {
        const element: any = elements.pop();

        if (!isNaN(Number(element))) {
            stack.push(element);
            continue;
        }

        const firstOperand = stack.pop();
        const secondOperand = stack.pop();
        // @ts-ignore
        console.log(operations[element], element, typeof element);
        // @ts-ignore
        const result = operations[element](firstOperand, secondOperand);
        console.log(result)
    }
}

polishNotation(' * + 2 2 3 ')