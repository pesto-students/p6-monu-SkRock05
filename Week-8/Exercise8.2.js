class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const isValidBST = (root, min, max) => {
  if (root == null) return true;

  if (root.data < min || root.data > max) return false;

  return (
    isValidBST(root.left, min, root.data - 1) &&
    isValidBST(root.right, root.data + 1, max)
  );
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
console.log(isValidBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));
