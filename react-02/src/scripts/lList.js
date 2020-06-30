class LinkedList {

    constructor () {

        const headNode = new Node ("llHead");
        this.head = headNode;
        this.tail = headNode;
        this.current = headNode;

    }

    first() {

        this.current = this.head.nextPtr === null ? this.head : this.head.nextPtr;

    }

    last() {

        this.current = this.tail;

    }

    next() {

        this.current = this.current.nextPtr === null ? this.current : this.current.nextPtr;

    }

    previous() {

        this.current = this.current.prevPtr === this.head ? this.current : this.current.prevPtr;

    }

    insertAfter(subject, amount) {

        const newNode = new Node (subject, amount, this.current,
            this.current.nextPtr === null ? null : this.current.nextPtr);

        if (this.current.nextPtr !== null) this.current.nextPtr.prevPtr = newNode;
        this.current.nextPtr = newNode;

        this.current = newNode;

        if (this.current.nextPtr === null) this.tail = newNode;

    }

    delete() {

        const tempCurrent = this.current;
        if (this.current.nextPtr !== null) this.current.nextPtr.prevPtr = this.current.prevPtr;
        this.current.prevPtr.nextPtr = this.current.nextPtr;
        
        if (tempCurrent.nextPtr === null && tempCurrent.prevPtr === this.head) this.current = this.head;
        else if (tempCurrent.prevPtr === this.head) this.current = tempCurrent.nextPtr;
        else this.current = tempCurrent.prevPtr;

        if (this.current.nextPtr === null) this.tail = this.current;

    }

    //
    // total all the amounts of all nodes. Receive the "START" as a parameter to jump to
    // first node. Cycle through remaining nodes recursively.
    //

    total(nodeFlg) {

        if (nodeFlg === "START") {
            this.first();
        }
        else {
            this.next();
        }

        let sumTotal = 0;
        if (this.current.nextPtr === null) 
            sumTotal = Number(this.current.amount);
        else
            sumTotal = Number(this.current.amount) + Number(this.total("NEXT"));

        return sumTotal;

    }

}

class Node {

    constructor (subject, amount, prevPtr, nextPtr) {

        this.subject = subject;
        this.amount = amount;
        this.prevPtr = prevPtr;
        this.nextPtr = nextPtr;

        if (typeof this.amount == 'undefined') this.amount = 0;
        if (typeof this.prevPtr == 'undefined') this.prevPtr = null;
        if (typeof this.nextPtr == 'undefined') this.nextPtr = null;

    }

    //
    // Simple "show" method for now. See how competency wants this used before getting fancy. Wish List:
    //

    showNode () {

        return `Subject = ${this.subject}; ` +
            `Amount = ${this.amount}; ` + 
            `Previous = ${this.prevPtr === null ? null : this.prevPtr.subject}; ` +
            `Next = ${this.nextPtr === null ? null : this.nextPtr.subject}`;

    }
}

export default {Node, LinkedList};