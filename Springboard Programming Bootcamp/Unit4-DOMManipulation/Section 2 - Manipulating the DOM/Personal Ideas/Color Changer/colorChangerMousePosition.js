const letters = document.querySelectorAll(`.letter`)

for (let i = 0; i<letters.length; i++) 
{

    // Make it so that if all the letters are highlighted in a row the whole word lights up temporarily.

    console.log(letters)
    letters[i].addEventListener("mouseover", function (e)
    {
        e.target.style.color = "white";
    }
    )

    letters[i].addEventListener("mouseout", function (e)
    {
        e.target.style.color = "black";
    }
    )
}
/*
function randomColor(e) 
{
    R = (Math.round(255*e.pageX/e.target.height));
    G = (0);
    B = (Math.round(255*e.pageX/));
    return `rgb(${R},${G},${B})`;
};
/*
for(let letter of letters) 
{
    letter.style.color = randomRGB();
}

function letterColorChange()
{
    letter.style.color = randomRGB();
}

function randomRGB() 
{
    const r = Math.floor(Math.random() *255);
    const g = Math.floor(Math.random() *255);
    const b = Math.floor(Math.random() *255);

    return `rgb(${r},${g},${b})`;
}
*/