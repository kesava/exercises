export function flt(arr) {
  let output = [];
  arr.forEach(ele => {
    if (Array.isArray(ele)) {
      output = output.concat(flt(ele));
    } else {
      output.push(ele);
    }
  });
  return output;
}
