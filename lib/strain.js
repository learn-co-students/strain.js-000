'use strict';

var strain = {
  keep: function(array, callback){
    var kept = [];
    array.forEach(function(a){
      if (callback(a) === true){
        kept.push(a);
      }
    })
    return kept;
  },
  discard: function(array, callback){
    var kept = [];
    array.forEach(function(b){
      if(callback(b) === false){
        kept.push(b);
      }
    })
    return kept;
  }
};