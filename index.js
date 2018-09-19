'use strict';

const lazyLoad = function (libName) {
  return require(`./lib/${libName}`);
};

module.exports = new Proxy(module.exports, {
  get: (target, key) => {
    if (typeof key === 'symbol' || key === 'inspect') return;
    return lazyLoad(key);
  }
});