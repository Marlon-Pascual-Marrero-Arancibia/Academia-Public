function every(array, callback)
{
    let repetitions = 0;
    while (array.length > repetitions)
    {
        if (!callback(array[repetitions], i, arr)) return false;
    }
    return true;
}