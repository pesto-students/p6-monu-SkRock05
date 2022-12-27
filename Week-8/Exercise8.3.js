class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

const levelOrder = (root) => {
  if (!root) return [];
  let result = [];
  let queue = [root];
  // console.log(queue);
  while (queue.length != 0) {
    let subarr = [];
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      let node = queue.pop();
      subarr.push(node.data);
      // console.log(subarr);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }
    result.push(subarr);
  }
  // console.log(result);
  return result;
};

const constructTree = () => {
  let root = new Node(4);
  root.left = new Node(2);
  root.right = new Node(5);
  root.left.left = new Node(1);
  root.left.right = new Node(3);

  return root;
};
let root = constructTree();

const traversalArray = levelOrder(root);
// console.log(tra);
for (let val of traversalArray) {
  console.log(val);
}
