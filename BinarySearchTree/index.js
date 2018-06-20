function BinarySearchTree(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
	if (value <= this.value) {
		if (!this.left) {
			this.left = new BinarySearchTree(value);
		} else {
			this.left.insert(value);
		}
	} else {
		if (!this.right) {
			this.right = new BinarySearchTree(value);
		} else {
			this.right.insert(value);
		}
	}
};

const binarySearchTree = new BinarySearchTree(50);
binarySearchTree.insert(30);
binarySearchTree.insert(70);
binarySearchTree.insert(100);
binarySearchTree.insert(60);
binarySearchTree.insert(59);
binarySearchTree.insert(20);
binarySearchTree.insert(45);
binarySearchTree.insert(35);
binarySearchTree.insert(85);
binarySearchTree.insert(105);
binarySearchTree.insert(10);

console.log(binarySearchTree.right.right);