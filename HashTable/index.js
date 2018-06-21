function HashTable(size) {
	this.buckets = new Array(size);
	this.numBuckets = this.buckets.length;
}

HashTable.prototype.hash = function (key) {
	let total = 0;
	for (let i = 0; i < key.length; i++) {
		total += key.charCodeAt(i);
	}
	return total % this.numBuckets;
};

HashTable.prototype.insert = function (key, value) {
	let index = this.hash(key);
	if (!this.buckets[index]) {
		this.buckets[index] = new HashNode(key, value);
	} else if (this.buckets[index].key === key) {
		this.buckets[index].value = value;
	} else {
		let currentNode = this.buckets[index];
		while (currentNode.next) {
			if (currentNode.next.key === key) {
				currentNode.next.value = value;
				return;
			}
			currentNode = currentNode.next;
		}
		currentNode.next = new HashNode(key, value);
	}
};

HashTable.prototype.get = function (key) {
	let index = this.hash(key);
	if (!this.buckets[index]) {
		return null;
	} else {
		let currentNode = this.buckets[index];
		while (currentNode) {
			if (currentNode.key === key) {
				return currentNode.value;
			}
			currentNode = currentNode.next;
		}
		return null;
	}
};

function HashNode(key, value, next) {
	this.key = key;
	this.value = value;
	this.next = next || null;
}

const hashTable1 = new HashTable(30);
hashTable1.insert('Dean', 'dean@gmail.com');
hashTable1.insert('Megan', 'megan@gmail.com');
hashTable1.insert('Dane', 'dane@yahoo.com');
hashTable1.insert('Dean', 'deanmachine@gmail.com');
hashTable1.insert('Megan', 'megansmith@gmail.com');
hashTable1.insert('Dane', 'dane1010@outlook.com');

console.log(hashTable1.get('Dane'));
console.log(hashTable1.get('Jamie'));