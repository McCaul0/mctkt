var fs = require('fs');
var fileName = "/Users/McCaulBaggett/GitHub/mctkt/dummy data/data1.json";

	
var iterator = function (copies, JSONstring) {
	for (i=1; i <= copies; i++) {
	for (var key in JSONstring) {
		if (JSONstring.hasOwnProperty(key)) {
			JSONoutput = (JSONstring[key]+i);
			return(JSONoutput);
			//console.log(JSONoutput);
		}
	}
	}
};

var duplicator = function (fileName,copies) {
	"use strict";
	fs.readFile(fileName, 'utf8', function (error, data) {
		if (error) {
			console.log(error);
		}
		else {
			var JSONtext = data;
			// this section parses the json data into an object
			var	JSONstring = JSON.parse(JSONtext);
			//console.log(JSONstring);
			
			for (var key in JSONstring) {
  if (JSONstring.hasOwnProperty(key)) {
    alert(key + " -> " + JSONstring[key]);
  }
};
	var iterator = function (copies, JSONstring) {
		for (i=1; i <= copies; i++) {
		for (var key in JSONstring) {
			if (JSONstring.hasOwnProperty(key)) {
				JSONoutput = (JSONstring[key]+i);
				return(JSONoutput);
			}
		}
		}
	}
		};
	});


	
};


