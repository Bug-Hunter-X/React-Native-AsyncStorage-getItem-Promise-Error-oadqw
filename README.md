# React Native AsyncStorage getItem Promise Error

This repository demonstrates a common error when using AsyncStorage in React Native: attempting to access the value returned by `AsyncStorage.getItem` directly without awaiting the promise. The `bug.js` file shows the incorrect usage, and the `bugSolution.js` file provides the correct solution.

## Problem

`AsyncStorage.getItem` returns a Promise.  Attempting to access the value synchronously before the promise resolves will result in a `TypeError` because the value is a Promise object, not the actual stored string.

## Solution

Always use `.then()` or `async/await` to handle the Promise returned by `AsyncStorage.getItem`.
