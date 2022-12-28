//doubleAndReturnArgs
//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...rest) => 
{
    while (rest.length > 0)
    {
        arr.push(rest.shift());
    }
    return arr;
};