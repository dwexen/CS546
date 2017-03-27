const fd = require("./fileData");
const tM = require("./textMetrics");
const fs = require('fs');
let metrics = tM.createMetrics("Hello, my friends! This is a great day to say hello.\nhello\n");
//console.log("Hello, my friends! This is a great day to say hello.\nhello\n");
//console.log(metrics);
let Ostring = fd.getFileAsString('./chapter1.txt');
let Tstring = fd.getFileAsString('./chapter2.txt');
let Threestring = fd.getFileAsString('./chapter3.txt');


fs.stat('./chapter1.txt', function(err, stats) {
	if(err) {
		throw err;
		return;
	}
	console.log("successfully found file");
})
//console.log(tM.createMetrics(JSON.stringify(Ostring)));

let myString = fd.getFileAsString('./chapter1.txt');

myString.then((data) => {
	console.log(tM.createMetrics(data).totalLetters);
}).catch((error) => {
	console.error(error);
})


/*
let jstring = fd.getFileAsJSON('./chapter1.txt');

jstring.then((data) => {
    console.log("This was a success");
    console.log(tM.createMetrics(data));
}).catch((error) => {
    console.error(error);
});*/

/*
let sstring = fd.saveStringToFile('./test.txt', "Hello world");

sstring.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});

let obj = [1,2,3,4,5];
let ostring = fd.saveJSONToFile('./test.txt',obj);
ostring.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});
*/


