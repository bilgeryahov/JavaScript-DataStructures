function HashTable(size) {
	this.buckets = new Array(size);
	this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
	this.key = key;
	this.value = value;
	this.next = next || null;
}

const hashTable1 = new HashTable(30);
console.log(hashTable1);