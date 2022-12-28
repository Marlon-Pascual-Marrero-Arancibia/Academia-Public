//Slice and Dice!
// For this section, write the following functions using:
// rest, spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => 
{
    let retArr = items;
    retArr.splice((Math.random()*items.length),1);
    return retArr;
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) 
{
    let arr = array1;
    let arr2 = array2;
    while (array2.length > 0)
    {
        arr.push(arr2.shift());
    }
    return arr;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) 
{
    let newObject = obj;
    newObject[key] = val;
    return newObject;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) 
{
    let newObj = obj;
    delete newObj.key;
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) 
{
    return mergeObjects(obj1, obj2);
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) 
{
    let copyObj = obj;
    copyObj[key] = val;
    return copyObj;
}