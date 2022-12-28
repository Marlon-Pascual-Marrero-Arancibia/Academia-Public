// Write a function called vowelCount which accepts a string and 
// returns a map where the keys are numbers and 
/// the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str)
{
    const vowels = "aeiou";
    const word = ([...str]);

    let map = new Map();

    word.forEach(letter => 
    {
        letter.toLowerCase;
        if (vowels.indexOf(letter) !== -1)
        {
            if (map.has(letter)) {map.set(letter, map.get(letter)+1)}
            else {map.set(letter, 1)}
        }
    });
    return map
}