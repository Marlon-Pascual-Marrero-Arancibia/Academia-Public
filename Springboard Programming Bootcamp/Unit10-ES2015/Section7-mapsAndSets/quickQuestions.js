// What does the following code return?

new Set([1,1,2,2,3,4]) // Set { 1, 2, 3, 4 }

[...new Set("referee")].join("") //ref

// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true); // Map { [ 1, 2, 3 ] => true }
m.set([1,2,3], false); // Map { [ 1, 2, 3 ] => true, [ 1, 2, 3 ] => false }