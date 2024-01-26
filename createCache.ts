function createCache() {
  let cache = new Map();

  return function memoized(fn, ...args) {
    const key = args.join(":");

    if (cache.has(key)) {
      console.log("Getting result from cache for key:", key);
      return cache.get(key);
    } else {
      console.log("Calculating result for key:", key);
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}

const memoizedSum = createCache();

const sum = (a, b) => {
  return a + b;
};

console.log("memoizedSum", memoizedSum(sum, 1, 3));
console.log("memoizedSum", memoizedSum(sum, 1, 3));
console.log("memoizedSum", memoizedSum(sum, 1, 3));
console.log("memoizedSum", memoizedSum(sum, 1, 3));

function example(...args) {
  console.log(args);
}

const arr = [1, 2, 3];

example(...arr); // Распаковка массива, вывод: [1, 2, 3]
example(...arr, 4, 5); // Распаковка массива и добавление дополнительных аргументов, вывод: [1, 2, 3, 4, 5]
example([...arr]); // Создание нового массива, который затем распаковывается, вывод: [ [ 1, 2, 3 ] ]
