function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
}

//Refactor into ES2015
//Refactor the above code to use two arrow functions. Turn it into a one-liner.

const doubleArrow = arr => arr.map (val => val*2)