'use strict';

var strain = {
	keep: function(array, callback) {
		var store = [];

		for(var count in array) {
			if( callback(array[count]) )
				store.push(array[count])	
		}

		return store;
	},
	discard: function(array, callback) {
		var store = [];

		for(var count in array) {
			if( !callback(array[count]) )
				store.push(array[count])
		}

		return store;
	}
};
