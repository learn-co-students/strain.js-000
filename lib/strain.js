'use strict';

var strain = {

  keep: function(array, eachFunction){
    array.forEach(function(arrayItem, index){
      if (eachFunction(arrayItem) == false){
        delete array[index];
      } else
        arrayItem
       });
    return array
  },

  discard: function(array, eachFunction){
    array.forEach(function(arrayItem, index){
      if (eachFunction(arrayItem) == true){
        delete array[index];
      } else
        arrayItem
       });
    return array
  }


};