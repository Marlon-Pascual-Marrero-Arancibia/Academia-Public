function prepareColors()
{
    const allButtons = document.querySelectorAll(".button");

    for (let i = 0; i<allButtons.length; i++) 
    {
        allButtons[i].addEventListener("click", function (e)
        {
            document.body.style.backgroundColor = e.target.dataset.hex;
        }
        )
    }
}
