class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const hasCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
};

const constructLinkedList = (arr) => {
  let head = new Node(0);
  let curr = head;
  for (let i = 0; i < arr.length; i++) {
    head.next = new Node(arr[i]);
    head = head.next;
  }
  head.next = curr.next.next;

  return curr.next;
};

let head = constructLinkedList([1, 2, 3, 4, 5]);

console.log(hasCycle(head));
