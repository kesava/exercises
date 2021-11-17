export function memoize(fn) {
  const lookup = new Map();
  return function() {
    const key = `${fn}-${[...arguments].join(",")}`;
    if (lookup.has(key)) {
      return lookup.get(key);
    } else {
      lookup.set(key, fn.apply(null, arguments));
      return lookup.get(key);
    }
  }
}
