'use strict';

var strain = {

  keep: function(array, eachFunction){
    array.forEach(function(arrayItem, index){
      if (eachFunction(arrayItem) == false){
        array.splice(index, 1);
      } else
        arrayItem
       });
    return array
  },

  discard: function(array, eachFunction){
    array.forEach(function(arrayItem, index){
      if (eachFunction(arrayItem) == true){
        array.splice(index, 1);
      } else
        arrayItem
       });
    return array
  }


};