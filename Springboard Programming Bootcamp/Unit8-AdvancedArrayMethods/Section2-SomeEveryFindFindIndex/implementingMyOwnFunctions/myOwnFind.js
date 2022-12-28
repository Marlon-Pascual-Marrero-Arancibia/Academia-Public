function find(arr, callback)
{
    for (let i = 0; i<arr.length; i++)
    {
        if (callback(arr[i],i,arr) === true) return arr[i];
    }
}