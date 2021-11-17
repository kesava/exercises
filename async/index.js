export const async = {
  sequence(tasks) {
    return function(cbfn) {
      if (!tasks.length) {
        cbfn();
      }
       var index = 0;
      function next(data) {
        if (index < tasks.length) {
          tasks[index++](function(err, result) {
            if (err) {
              cbfn(err);
            } else {
              next(result);
            }
          }, data);
        } else {
          cbfn(null, data);
        }
      }
      
      next();
    }
  },
  parallel(promises) {
    return function(err, data) {
      console.log({ err, data });
    }
  }
};
