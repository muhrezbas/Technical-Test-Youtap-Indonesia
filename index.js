let isBalanced = (input) => {
    if (input.trim() == "") {
        return true;
    }
    let stack = []
    for (let bracket of input.trim()) {
        if (bracket === '(') {
            stack.push(1)
        } else {
            if (stack.pop() !== 1) {
                return false;
            }
        }
    }
    return stack.length === 0
}

console.log(isBalanced('()'))
console.log(isBalanced('()()'))
console.log(isBalanced(')('))
console.log(isBalanced(''))
console.log(isBalanced('((()))'))
console.log(isBalanced('((()'))