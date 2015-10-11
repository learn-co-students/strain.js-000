'use strict';

var strain = {
  keep: function(array, block) {
    var collection = [];
    array.forEach(function(i) {
      (block(i)) ? collection.push(i) : null
    });
    return collection;
  },
  discard: function(array, block) {
    var collection = [];
    array.forEach(function(i) {
      (block(i)) ? null : collection.push(i)
    });
    return collection;
  }
};