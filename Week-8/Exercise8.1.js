class Node {
  constructor(item) {
    this.data = item;
    this.left = null;
    this.right = null;
  }
}

const maxDepth = (root) => {
  if (root == null) return 0;
  else {
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    if (leftDepth > rightDepth) return leftDepth + 1;
    else return rightDepth + 1;
  }
};

const constructTree = () => {
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);

  return root;
};

let root = constructTree();

let heightOfTree = maxDepth(root);
console.log(heightOfTree);
