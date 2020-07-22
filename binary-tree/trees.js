class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const ordered = [10, 20, 30, 40, 50, 60, 70, 80, 90];

class BST {
  constructor() {
    this.root = null;
  }
  add(value) {
    // check for root
    if (!this.root) {
      this.root = new TreeNode(value);
      return;
    }
    if()
  }
}
