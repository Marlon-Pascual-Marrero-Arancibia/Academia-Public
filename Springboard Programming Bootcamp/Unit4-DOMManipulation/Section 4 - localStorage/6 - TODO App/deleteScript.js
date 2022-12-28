section.addEventListener(`click`, function(e)
{
    if (e.target.tagName == 'BUTTON')
    {
        e.target.parentElement.remove();
        newItems.splice(`${e.target.dataset.position}`, 1)
        localStorage.setItem("list", JSON.stringify(newItems));
    } else if (e.target.tagName == `P`)
    {
        e.target.style.textDecoration = e.target.style.textDecoration === 'line-through' ? '' : 'line-through';
    }
})