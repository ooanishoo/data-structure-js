class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length === 0) {
      console.log("Stack is empty");
    }
    return this.items.pop();
  }

  isEmtpy() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  log() {
    console.log(this.items);
  }
}

module.exports = Stack;
