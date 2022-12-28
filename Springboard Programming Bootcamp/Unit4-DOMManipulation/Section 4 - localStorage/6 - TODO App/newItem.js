function initialize(arr)
{
    localStorage.clear();
    arr.forEach
    (
        toDo => newItem(toDo)
    );

}

form.addEventListener("submit", function(e)
{
    e.preventDefault();
    newItem(userInput.value);
});

function newItem(newItem)
{
    section.appendChild(outputText(newItem));
    newItems.push(newItem);
    localStorage.setItem("list", JSON.stringify(newItems));
    form.reset();
}

function outputText(text)
{
    const newDiv = document.createElement('div');
    newDiv.appendChild(deleteButton());
    newP = document.createElement(`p`);
    newP.innerText = text;
    newP.style.display = "inline";
    newDiv.appendChild(newP);
    return newDiv;
}

function deleteButton()
{
    const newButton = document.createElement(`button`);
    newButton.className = "delete";
    newButton.innerText = "X"
    newButton.dataset.position = `${newItems.length}`;
    return newButton;
}