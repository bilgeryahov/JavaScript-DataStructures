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
	} else if (value > this.value) {
		if (!this.right) {
			this.right = new BinarySearchTree(value);
		} else {
			this.right.insert(value);
		}
	}
};

BinarySearchTree.prototype.contains = function (value) {
	if (value === this.value) {
		return true;
	} else if (value < this.value) {
		if (!this.left) {
			return false;
		} else {
			return this.left.contains(value);
		}
	} else if (value > this.value) {
		if (!this.right) {
			return false;
		} else {
			return this.right.contains(value);
		}
	}
};

BinarySearchTree.prototype.depthFirstTraversal = function (iteratorFunction, order) {
	if (order === 'pre-order') {
		iteratorFunction(this.value);
	}
	if (this.left) {
		this.left.depthFirstTraversal(iteratorFunction, order);
	}
	if (order === 'in-order') {
		iteratorFunction(this.value);
	}
	if (this.right) {
		this.right.depthFirstTraversal(iteratorFunction, order);
	}
	if (order === 'post-order') {
		iteratorFunction(this.value);
	}
};

BinarySearchTree.prototype.breadthFirstTraversal = function (iteratorFunction) {
	let queue = [];
	queue.push(this);
	while (queue.length) {
		let treeNode = queue.shift();
		iteratorFunction(treeNode);
		if (treeNode.left) {
			queue.push(treeNode.left);
		}
		if (treeNode.right) {
			queue.push(treeNode.right);
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

const order = 'in-order';
console.log('Depth First Traversal with ', order, ' method.');
binarySearchTree.depthFirstTraversal(function (node) {
	console.log(node);
}, order);

console.log('\n');

console.log('Breadth First Traversal.');
binarySearchTree.breadthFirstTraversal(function (node) {
	console.log(node.value);
});