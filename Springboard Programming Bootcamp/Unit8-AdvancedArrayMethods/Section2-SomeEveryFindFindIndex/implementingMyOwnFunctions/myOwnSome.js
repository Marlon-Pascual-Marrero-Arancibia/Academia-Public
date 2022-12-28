function some(array, callback)
{
    let repetitions = 0;
    while (array.length > repetitions)
    {
        if (callback(array[repetitions], i, arr)) return true;
    }
    return false;
}