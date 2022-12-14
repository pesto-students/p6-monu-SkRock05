let Stack1 = [];
let Stack2 = [];

function Enqueue(element) {
  Stack1.push(element);
}

function Dequeue() {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) {
      return "Cannot dequeue because queue is empty";
    }
    while (Stack1.length > 0) {
      let p = Stack1.pop();
      Stack2.push(p);
    }
  }
  return Stack2.pop();
}

Enqueue("a");
Enqueue("b");
Enqueue("c");
console.log(Dequeue());
