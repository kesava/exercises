export function makeCurry(fn) {
  let totalArgs = [];
  return function curried(arg1) {
    totalArgs.push(arg1);
    if (totalArgs.length === fn.length) {
      return fn.apply(null, totalArgs);
    } else {
      return function() {
        return curried(arguments[0]);
      }
    }
  }
}
