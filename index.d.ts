declare namespace XLRU {
  interface LRU {
    length: number;
    set(key: string, value: any): void;
    get(key: string): any;
  }

  interface LRU2 {
  }

  interface MultiQueue {
  }

  interface TwoQueues {
  }
  
  interface LRUFactory {
    new ({maxSize: number}): LRU;
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