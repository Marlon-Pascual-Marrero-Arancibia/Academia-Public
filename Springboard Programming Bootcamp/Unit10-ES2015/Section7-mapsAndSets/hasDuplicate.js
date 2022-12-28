// Write a function called hasDuplicate which accepts an array 
// it returns true or false if that array contains a duplicate

const hasDuplicate = arr => 
{
    arrSet = [...new Set (arr)];
    if (arrSet.length < arr.length)
    {
        return true;
    }
    return false;
}

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false