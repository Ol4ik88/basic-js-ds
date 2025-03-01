const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 
class Queue {
	constructor(){
		this.head=null;
		this.tail=null;
		this.length=0;
	}
  getUnderlyingList() {
		let cur=this.head;
		while(cur){
		let temp=cur;
		cur=cur.next;
		return temp;
		}
}

  enqueue(value) {
	const temp = new ListNode(value);
   
	if (this.head) {
		this.tail.next=temp;
		this.tail=temp;
	}else{
		this.head=temp;
		this.tail=temp;
	}
	this.length++;
 }

  dequeue() {
	const cur=this.head;
	this.head=this.head.next;
	this.length--;

	return cur.value;
	}
}

module.exports = {
  Queue
};
