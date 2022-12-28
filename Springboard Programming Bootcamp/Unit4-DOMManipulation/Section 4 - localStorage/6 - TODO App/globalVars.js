const form = document.querySelector("form");
const userInput = document.querySelector(`input[name=input]`);
const section = document.querySelector(`section`);
var localStorageItems = [];
var newItems = [];

document.addEventListener("DOMContentLoaded", function(event) 
    {   
        if (localStorage.getItem(`list`) !== null)
        {
        var localStorageItems = JSON.parse(localStorage.getItem(`list`));
        initialize(localStorageItems);
        }
    })
;