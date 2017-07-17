"use strict";

// Writing your own Function methods: myCall and myBind

// Exercise 1. Function.prototype.myCall()
//
// Write your own version of .call() by using .apply().
//
// Note how this function is defined on Function.prototype.
// This means you can call it directly on any function like
// (function() {}).myCall(newThis, arg1, arg2, arg3)
// You will need to use 'this' to access the current function
//
// For more info on call see:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
//
//
// ex.
// function returnThis() {
//  return this;
// }
// returnThis.myCall({key: 'value'}) // -> {key: 'value'}
//
// ex.
// function min(a, b) {
//  return a < b ? a : b;
// }
// min.myCall(null, 8, 2) // -> 2
// min.myCall(null, -13, -88) // -> -88
Function.prototype.myCall = function(newThis) {
  // YOUR CODE HERE
};

// Bonus exercise: Function.prototype.myBind()
//
// Write a method on Function.prototype that returns
// a new function 'boundFn' that is "bound" to the given
// 'newThis' object.
// When 'boundFn' is called it calls through to the original
// function and explicitly sets 'this' to 'newThis'.
//
// ex.
// function returnThis() {
//  return this;
// };
// var firstObj = {
//  name: 'first'
// };
// var secondObj = {
//  name: 'second',
//  returnThis: returnThis.myBind(firstObj)
// };
// secondObj.returnThis() // -> {name: 'first'}
//
// This is a simplified version of .bind() that only binds 'this'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
Function.prototype.myBind = function(newThis) {
  // YOUR CODE HERE
};
