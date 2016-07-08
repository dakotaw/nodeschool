var fs = require('fs')

var fileToRead = process.argv[2];
var bufferString = fs.readFileSync(fileToRead).toString();
var lineArray = bufferString.split('\n');
console.log(lineArray.length - 1);
