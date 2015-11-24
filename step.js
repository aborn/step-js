#!/usr/bin/env node

console.log("step-js");

function testArguments(arg0, arg1) {
    console.log('-------------');
    console.log(arguments.callee);
    console.log('need argument number:' + arguments.callee.length);
    console.log('actual input arg number:' + arguments.length);
}

testArguments('a');
testArguments();
testArguments('a', 1, 3);
