var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// ES2015 One-Line Array Swap with Destructuring

let arr = [1,2];
[arr[0], arr[1]] = [arr[1], arr[0]];