'use strict';

var strain = {
  keep: function(arr, callback){
      var kept = [];
      arr.forEach(function(x){
        if (callback(x) === true) {
          kept.push(x);
        }
      });
      return kept;
    },
  discard: function(arr, callback){
    var kept = [];
    arr.forEach(function(x){
      if (callback(x) !== true) {
        kept.push(x);
      }
    });
    return kept;
  }
};