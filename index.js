#!/usr/bin/env node

var ColorHash = require('color-hash');

var argument = process.argv.slice(2).join(' ');
var colorHash = new ColorHash();
console.log(colorHash.hex(argument));
