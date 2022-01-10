
// ' * + 2 2 3 '

const operations = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '/': (a: number, b: number) => a / b,
    '*': (a: number, b: number) => a * b,
}

export const polishNotation = (str: string) => {
    const elements: Array<any> = str.split(' ');
    const stack = [];
    
    while (elements.length) {
        const element: any = elements.pop();
        const numberedElement = Number(element);

        if (!isNaN(numberedElement)) {
            stack.push(numberedElement);
            continue;
        }

        const firstOperand: any = stack.pop();
        const secondOperand: any = stack.pop();

        // @ts-ignore
        const result = operations[element](firstOperand, secondOperand);
        stack.push(result);
    }

    return stack[0];
}

polishNotation('* + 2 2 3'); // 12