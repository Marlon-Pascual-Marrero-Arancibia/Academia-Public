const gameContainer = document.getElementById("game");
var cardChosen = false;
var cardsShown = 0;
var card0;
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// Fisher Yates Shuffle
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    newDiv.dataset.shown = "false";
    newDiv.dataset.index = `${document.querySelectorAll('div[data-shown="false"]').length}`

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  console.log("click")
  if (cardsShown < 2 && event.target.dataset.shown === "false")
  {
    console.log("very first if")
    document.querySelector('h2#guesses').innerText = parseInt(document.querySelector('h2#guesses').innerText)+1;
    if(cardChosen)
    {
      console.log("cardChosen")
      if (card0.dataset.index !== event.target.dataset.index)
      {
      console.log("first if")

        event.target.style.backgroundColor = event.target.classList;
        event.target.dataset.shown = "true";
        cardsShown++;
        if (event.target.dataset.matched !== `true`)
        {
          console.log("second if")
          cardChosen ? cardCheck([card0, event.target]) : cardRegister(event.target)
        }
      }
    } else 
    {
      console.log("else")
      event.target.style.backgroundColor = event.target.classList;
      event.target.dataset.shown = "true";
      cardsShown++;
      cardChosen ? cardCheck([card0, event.target]) : cardRegister(event.target)
    }
  }
}

function cardRegister(card)
{
  console.log("register");
  cardChosen = true;
  card0 = card;
}

function cardCheck(cardArray)
{
  console.log("check");
  if (cardArray[0].style.backgroundColor === cardArray[1].style.backgroundColor)
  {
    console.log("remove");
    remove(cardArray);
  } else {
    setTimeout(function(){clear(cardArray)}, 1000);
  }
  cardChosen = false;
}

function clear(givenArr)
{
  givenArr.forEach((card)=>{card.style.backgroundColor = ''});
  givenArr.forEach((card)=>{card.dataset.shown = "false"});
  cardsShown = 0;
}

function remove(givenArr)
{
  //cardChosen ? cardCheck([card0, event.target]) : cardRegister(event.target)
  
  document.querySelector('h1#cardsLeft').innerText = parseInt(document.querySelector('h1#cardsLeft').innerText)-2;
  if (parseInt(document.querySelector('h1#cardsLeft').innerText) == 0)
  {
    newGame();
  }
  cardsShown = 0;
}

function newGame()
{
  if (confirm("play a new game?" + `High Score: ${highScore(document.querySelector('h2#guesses').innerText)}`))
  {
    window.location.reload();
  } else {
    alert(`play again soon!` + `High Score: ${highScore(document.querySelector('h2#guesses').innerText)}`);
  }
}

function highScore (score)
{
  if (localStorage.getItem('highScore') === null)
  {
    localStorage.setItem("highScore", score);
    return localStorage.getItem("highScore")
  }
  if (score < localStorage.getItem("highScore"))
  {
    localStorage.setItem("highScore", score);
  }
  return localStorage.getItem("highScore")
}
// when the DOM loads
createDivsForColors(shuffledColors);