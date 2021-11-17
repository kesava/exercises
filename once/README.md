Here's the basic usage of the file that you'll be creating:

```js
var once = require('./') // <- this is the file you make;


function bootstrapApp() {
  console.log('this should be shown once');
  return 22;
}

function add(a, b, c) {
  console.log(`adding ${a}, ${b} and ${c}: `);
  return a + b + c;
}

var initialize = once(bootstrapApp);
initialize();
initialize();

const a1 = once(add);
a1(1,2,3)
a1(1,2,3)

a1(3,4,5)

// 'this should be shown once'
// 22
// 22
// 'adding 1, 2 and 3: '
// 6
// 6
// 'adding 3, 4 and 5: '
// 12

```

More info: http://underscorejs.org/#once
