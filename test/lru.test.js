'use strict';

const tap = require('tap');
const {LRU} = require('..');
const test = tap.test;

test('constructor', t => {
  const lru = new LRU({maxSize: 1000});
  const size = lru.length;
  t.equal(size, 0);
  t.end();
});

test('set', t => {
  const lru = new LRU({maxSize: 10});
  let size = lru.length;
  t.equal(size, 0);
  lru.set('one', 1);
  size = lru.length;
  t.equal(size, 1);
  lru.set('two', 2);
  size = lru.length;
  t.equal(size, 2);
  try {
    lru.set(true, '1');
  } catch (error) {
    t.equal(error.message, 'true is not string');
  }
  t.end();
});

test('get', t => {
  const lru = new LRU({maxSize: 10});
  let head = lru.peek();
  t.equal(head, null);
  let value = lru.get('one');
  t.equal(value, null);
  value = lru.get(true);
  t.equal(value, null);
  lru.set('one', 1);
  lru.set('two', 2);

  head = lru.peek();
  t.equal(head.key, 'two');

  value = lru.get('one');
  head = lru.peek();
  t.equal(head.key, 'one');
  t.equal(value, 1);

  lru.set('three', 3);
  head = lru.peek();
  t.equal(head.key, 'three');

  value = lru.get('one');
  t.equal(value, 1);
  head = lru.peek();
  t.equal(head.key, 'one');
  t.end();
});