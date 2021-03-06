#!/usr/bin/env node

var path  = require('path');
var fs = require('fs');

var templatesPath = path.resolve(__dirname, '../templates')
var destPath = process.cwd();

var templates = fs.readdirSync(templatesPath);
var files = templates.map(function(filename, index) {
    return {
        'name': filename,
        'data': fs.readFileSync(path.join(templatesPath, filename), 'utf8')
    };
});

function writeFile(filename, data) {
    fs.writeFile(path.join(destPath, filename), data, function (err) {
        if (err) {
            throw err;
        }
        console.log('✔ saved', filename);
    });
}

files.forEach(function(file) {
    writeFile(file.name, files.data);
});