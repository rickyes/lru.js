'use strict';

const assert = require('assert');
const toString = Object.prototype.toString;

const Node = function (key, value, prevNode, nextNode) {
  this.key = key;
  this.value = value;
  this.next = nextNode;
  this.prev = prevNode;
}

const isKey = (key) => {
  assert.equal(toString.call(key), '[object String]', `${key} is not string`);
}

class LRU {
  constructor(param) {
    assert.equal(toString.call(param), '[object Object]', `${param} is not object`);
    assert.notEqual(param.maxSize, null, 'maxSize is null');
    this.maxSize = param.maxSize;
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  _unshift(key, value) {
    const node = new Node(key, value, null, this.head);
    this.size++;
    if (this.head == null) {
      this.tail = node;
    }
    this.head = node;
  }

  _removeLast() {
    let current = this.tail;
    if (current == null) return null;
    const prevNode = this.tail.prev;
    if (prevNode == null) {
      this.head = this.tail = null;
      return current.value;
    }
    prevNode.next = null;
    this.tail = prevNode;
    return current.value; 
  }

  set(key, value) {
    isKey(key);
    this._unshift(key, value);
  }

  get length () {
    return this.size;
  }

  get(key) {
    isKey(key);
  }
}

module.exports = LRU;