declare namespace XLRU {
  interface LRU {
  }

  interface LRU2 {
  }

  interface MultiQueue {
  }

  interface TwoQueues {
  }
  
  interface LRUFactory {
    new (): LRU;
  }

  interface LRU2Factory {
    new (): LRU2;
  }

  interface TwoQueuesFactory {
    new (): TwoQueues;
  }

  interface MultiQueueFactory {
    new (): MultiQueue;
  }
}

declare const XLRU: {
  LRU: XLRU.LRUFactory;
  LRU_2: XLRU.LRU2Factory;
  MultiQueue: XLRU.MultiQueueFactory;
  TwoQueues: XLRU.TwoQueuesFactory
}

export = XLRU;