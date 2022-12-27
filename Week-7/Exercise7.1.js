class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let constructLinkedList = (arr) => {
  let head = new Node(0);
  let curr = head;
  for (let i = 0; i < arr.length; i++) {
    head.next = new Node(arr[i]);
    head = head.next;
  }

  return curr;
};

let reverseLinkedList = (head) => {
  let prev = null;
  let curr = head;

  while (curr != null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

let newHead = constructLinkedList([1, 2, 3]);
let revHead = reverseLinkedList(newHead);

while (revHead != null) {
  console.log(revHead.val);
  revHead = revHead.next;
}
