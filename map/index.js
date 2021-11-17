export function map(arr, fn) {
  let output = [];
  arr.forEach(ele => {
    output.push(fn.apply(null, [ele]));
  });
  return output;
}
