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

  _moveToFirst(node) {
    if (this.head === node) return;
    if (this.tail === node) {
      this.tail = node.prev;
    }
    this.head.prev = node;
    node.prev.next = node.next;
    node.prev = null;
    node.next = this.head;
    this.head = node;
  }

  _unshift(key, value) {
    const node = new Node(key, value, null, this.head);
    this.size++;
    if (this.head == null) {
      this.tail = node;
    } else {
      this.head.prev = node;
    }
    this.head = node;
  }

  _removeLast() {
    let current = this.tail;
    if (current == null) return null;
    const prevNode = this.tail.prev;
    this.size--;
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
    try {
      isKey(key);
    } catch (error) {
      return null;
    }
    let current = this.head;
    if (current == null) return null;
    while (current != null) {
      if (current.key === key) {
        this._moveToFirst(current);
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  peek() {
    if (this.head == null) return null; 
    return {key: this.head.key, value: this.head.value};
  }
}

module.exports = LRU;