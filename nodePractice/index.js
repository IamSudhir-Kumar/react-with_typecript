#!/usr/bin/env node
const {pie} = require('./new.js');
const nodePractice = process.argv[2];
const newPractice = {
    content : nodePractice,
    id : pie
}
console.log(newPractice);
