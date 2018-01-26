function LinkedList () {
  this.head = null;
  this.tail = null;

  this.addToHead = function (value) {
    var newNode = new Node(value, this.head, null);
    if (this.head) {
      this.head.previous = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  };

  this.addToTail = function (value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  };

  this.removeHead = function () {
    if (!this.head) {
      return null;
    }
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.previous = null;
    } else {
      this.tail = null;
    }
    return val;
  };

  this.removeTail = function () {
    if (!this.tail) {
      return null;
    }
    var val = this.tail.value;
    this.tail = this.tail.previous;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    return val;
  };

  this.search = function (searchValue) {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === searchValue) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  };

   this.indexOf = function (indexOfValue) {
     var indexes = [];
     var currentIndex = 0;
     var currentNode = this.head;
     while (currentNode) {
       if (currentNode.value === indexOfValue) {
         indexes.push(currentIndex);
       }
       currentNode = currentNode.next;
       currentIndex ++;
     }
     return indexes;
   };
}

function Node (value, next, previous) {
  this.value = value;
  this.next = next;
  this.previous = previous;
}