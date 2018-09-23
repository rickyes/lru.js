# x-lru
Simplified LRU Cache based on [Lucky.js](https://github.com/rickyes/lucky.js)

[![Travis](https://img.shields.io/travis/rickyes/x-lru.svg?style=for-the-badge)](https://travis-ci.org/rickyes/x-lru)
[![Node Version](https://img.shields.io/badge/node-%3E=9.0.0-brightgreen.svg?longCache=true&style=for-the-badge)](https://www.npmjs.com/package/x-lru)
[![npm](https://img.shields.io/npm/v/x-lru.svg?style=for-the-badge)](https://www.npmjs.com/package/x-lru)
[![Codecov](https://img.shields.io/codecov/c/github/rickyes/x-lru/master.svg?style=for-the-badge)](https://codecov.io/gh/rickyes/x-lru)

## Install

``` bash
$ npm i x-lru --save
```

## Features
- [ ] LRU-1
- [ ] LRU-2
- [ ] MultiQueue
- [ ] TwoQueues

## Example

``` js
'use strict';

const {LRU} = require('x-lru');
const lru = new LRU({maxSize: 100});


lru.set('one', 1);
console.log(lru.length); // 1
```

## Author
Lucky.js © [Ricky 泽阳](https://github.com/rickyes), Released under the MIT License.  
