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
  parallel(tasks) {
    return function(cb) {
      var results = [];
      var errors = [];
      var fired = 0;

      tasks.forEach((task, idx) => {
        task(function(err, result){
          if (err) {
            errors[idx] = err;
          } else {
            results[idx] = result;
          }
          
          if (tasks.length === ++fired) {
              return cb(errors ? errors : null, results)
          }
        })
      });

    }
  }
};
