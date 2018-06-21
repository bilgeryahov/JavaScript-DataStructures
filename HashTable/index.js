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

function HashNode(key, value, next) {
	this.key = key;
	this.value = value;
	this.next = next || null;
}

const hashTable1 = new HashTable(30);
console.log(hashTable1.hash('Becca'));