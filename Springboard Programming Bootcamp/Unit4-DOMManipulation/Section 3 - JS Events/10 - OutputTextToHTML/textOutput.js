const form = document.querySelector("form#textForm");
const textInput = document.querySelector(`input[name="textInput"]`);
const colorInput = document.querySelector(`input[name="textColor"]`);
const fontSize = document.querySelector('input[name="fontSize"]');
const section = document.querySelector(`section#results`)

form.addEventListener("submit", function(e)
{
    e.preventDefault();
    const newText = outputText
    (
        textInput.value,
        colorInput.value,
        fontSize.value
    );
    section.appendChild(newText);
})

function outputText(text, color, size)
{
    const newText = document.createElement('p');
    newText.innerText = text;
    newText.style.color = color;
    newText.style.fontSize = size+"px";
    return newText;
}
