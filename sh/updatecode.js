#!/usr/bin/env node

var path  = require('path');
var fs = require('fs');
var exec = require('child_process').exec;
var util = require('util');

var codefolder = "github";
var codePath = path.join(process.env.HOME, codefolder);
console.log(codePath);
var filesDir = fs.readdirSync(codePath);

function stdOutput(error, stdout, stderr) {
    console.log("------------------------------------------");
    if (!util.isNullOrUndefined(error)) {
        console.log(error);
    }

    console.log(stdout);
}

var projNames = ["appkit-web", "semanticbox", "step-js", "range.js", "popkit",
    "step-elixir"];

filesDir.map(function(filename, index) {
    if (projNames.indexOf(filename) >= 0) {
        var projDir = path.join(codePath, filename);
        var child = exec("pwd & git pull", {
            cwd : projDir
        }, stdOutput);
        //console.log(child.pid)
    }
})
