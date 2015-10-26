'use strict';

var strain = {
  keep: function(array, callback){
    if (array.length == 0) {
      return array;
    }
    var resultArray = [];
    array.forEach(function(element){
      if (callback(element)){
        resultArray.push(element);
      }
    })
    return resultArray; 
  },
  discard: function(array, callback){
    if (array.length == 0) {
      return array;
    }
    var anotherResultArray = [];
    array.forEach(function(element){
      if (callback(element) == false){
        anotherResultArray.push(element);
      }
    })
    return anotherResultArray;
  }
};