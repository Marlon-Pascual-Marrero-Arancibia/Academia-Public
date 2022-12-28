// mergeObjects
// Write a function called mergeObjects that accepts two objects and it
// returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (Obj1, Obj2) => 
{
    const keys = Object.keys(Obj1);
    keysInput = 0;

    while (keys.length > keysInput)
    {
        const currentKey = keys[keysInput];
        Obj2[currentKey] = Obj1[currentKey];
        keysInput++;
    }
    return Obj2;
};