#!/usr/bin/env node

var path  = require('path');
var fs = require('fs');

var codePath = path.join(process.env.HOME, "dpcode");
console.log(codePath);
var filesDir = fs.readdirSync(codePath);

filesDir.map(function(filename, index) {
    if (filename.indexOf("mapi") == 0) {
        console.log(filename + index);
    }
})