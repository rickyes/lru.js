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

## API
所有LRU模式的API都是相同的。
### 1、`length: number`
获取LRU的长度
### 2、`set(key: string, value: any): void`
添加LRU元素，新增的元素会插入到LRU的头部
### 3、`get(key: string): any`
获取元素，命中key的元素会移动至LRU的头部
### 4、`peek(): {key: string, value: any}`
获取LRU头部元素，但不会删除

## Features
- [x] LRU-1
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
