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
  try {
    lru.set(true, '1');
  } catch (error) {
    t.equal(error.message, 'true is not string');
  }
  t.end();
});