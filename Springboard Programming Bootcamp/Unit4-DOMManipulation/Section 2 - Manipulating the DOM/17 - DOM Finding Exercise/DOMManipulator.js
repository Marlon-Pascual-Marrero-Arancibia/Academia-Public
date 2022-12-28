/*
✓ 	Select the section with an id of container without using querySelector.
noQSelectContainer()
✓ 	Select the section with an id of container using querySelector.
qSelectContainer() 
✓ 	Select all of the list items with a class of “second”. << this can be refined
selectAllSecondClass() 
✓ 	Select a list item with a class of third, but only the list item inside of the ol tag.
selectThirdInOrderedList()
✓ 	Give the section with an id of container the text “Hello!”.
changeTextOfSectionContainer() 
✓ 	Add the class main to the div with a class of footer.
addMainToDivFooter() 
✓ 	Remove the class main on the div with a class of footer.
removeMainFromDivFooter() 
✓ 	Create a new li element.
newListItemElement() 
✓ 	Give the li the text “four”.
listItemAddText() 
✓ 	Append the li to the ul element.
appendListItemToUnorderedList() 
✓ 	Loop over all of the lis inside the ol tag and give them a background color of “green”.
changeOrderedListItemBGColor()
✓ 	Remove the div with a class of footer
deleteDivFooter() 
*/
var lineItem;

function noQSelectContainer() 
{
	return document.getElementById("container");
}

function qSelectContainer() 
{
	return document.querySelector("#container");
}

function selectAllSecondClass() 
{
	return 	document.querySelectorAll(".second");
}

function selectThirdInOrderedList() 
{
	return document.querySelector("ol").querySelector(".third");
}

function changeTextOfSectionContainer() 
{
	document.querySelector("section#container").innerHTML = "hello";
}

function addMainToDivFooter() 
{
	document.querySelector(".footer").setAttribute('class', "main footer");
}

function removeMainFromDivFooter() 
{
	document.querySelector("div.footer").setAttribute('class', "footer");
}

function newListItemElement() 
{
	lineItem = document.createElement("li");
}

function listItemAddText() 
{
	var text = document.createTextNode("four")
	lineItem.appendChild(text);
}

function appendListItemToUnorderedList() 
{
	document.querySelector("ul").appendChild(lineItem);
}

function changeOrderedListItemBGColor()
{
	document.querySelector("ol").querySelectorAll("li").forEach
	(
		function(currentValue, currentIndex, listObj) 
		{
			currentValue.style.backgroundColor = "green";
		}
	);
}

function deleteDivFooter() 
{
	document.querySelector("div.footer").remove();
}