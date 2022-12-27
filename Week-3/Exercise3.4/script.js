function createStack() {
    let items = [];
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        },
        showItems() {
            console.log(items)
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]
// stack.items = [10, 100, 1000]; this will not work
stack.push(100);
stack.push(50);
stack.push(90);
stack.push(95);

stack.pop();
stack.pop();
stack.pop();
stack.showItems()