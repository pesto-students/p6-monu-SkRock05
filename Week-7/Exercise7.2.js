class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

let rotate = (head, k) => {
  if (k == 0) return;

  let current = head;

  let count = 1;
  while (count < k && current != null) {
    current = current.next;
    count++;
  }

  if (current == null) return;

  let kthNode = current;

  while (current.next != null) current = current.next;
  current.next = head;
  head = kthNode.next;

  kthNode.next = null;
  return head;
};

let printList = (head) => {
  let temp = head;
  while (temp != null) {
    console.log(temp.data);
    temp = temp.next;
  }
};

let constructLinkedList = (arr) => {
  let head = new Node(0);
  let curr = head;
  for (let i = 0; i < arr.length; i++) {
    head.next = new Node(arr[i]);
    head = head.next;
  }
  // console.log(curr.next);
  return curr.next;
};

let newHead = constructLinkedList([1, 2, 3]);
let rotatedList = rotate(newHead, 2);
// console.log(rotatedList);
printList(rotatedList);
