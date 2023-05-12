export class Element {

  _value = null;
  _next = null;

  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
  }

  set next(val) {
    this._next = val;
  }

  get next() {
    return this._next;
  }
}

export class List {

  _head = null;

  constructor(array) {
    this._head = null;
    if(array){
      array.forEach(element => {
        this.add(new Element(element));
      });
    }
  }


  add(nextValue) {
      nextValue.next = this._head;
      this._head = nextValue;
    
  }

  get length() {
    var current = this._head;
    var length = 0;
    while (current != null) {
      length++;
      current = current.next;
    }
    return length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    var arr = [];
    var current = this._head;
    while (current != null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  reverse() {
    var current = this._head;
    var previous = null;
    var next = null;
    while(current != null){
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this._head = previous;
    return this;
  }
}
