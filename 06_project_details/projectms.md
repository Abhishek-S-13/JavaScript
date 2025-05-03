## Project releated DOM

## Project link [Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-rgb4qxqp?file=1-colorChanger%2Fchaiaurcode.js)

## Project 1 Color change JS code 

``` Javascript 

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function(button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        if (e.target.id === 'orange') {
            // body.style.backgroundColor = 'grey'
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'purple'){  // purple color not mentioned in css file
            body.style.backgroundColor = e.target.id;
        }
    })
});
```

## Project 2 BMI Calculator JS code

```Javascript

const form = document.querySelector('form')
// this usecase will give you empty
// const hgt = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const hgt = parseInt(document.querySelector('#height').value)
    const wgt = parseInt(document.querySelector('#weight').value)
    const res = document.querySelector('#results')

    if( hgt === '' || hgt < 0 || isNaN(hgt) ){
        res.innerHTML = `Please enter valid height ${hgt}`
    }
    else if ( wgt === '' || wgt < 0 || isNaN(wgt) ){
        res.innerHTML = `Please enter valid weight ${wgt}`
    }
    else {
       const bmi = ((wgt / ((hgt*hgt)/10000)).toFixed(2)) 
       // show the result
       res.innerHTML = `<span>${bmi}</span>`
    }
} )

```
## Project 3 Digital clock JS code

```Javascript
const clk = document.getElementById('clock')
// const clk = document.querySelector('#clock') // this type we can use 

setInterval( function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clk.innerHTML = date.toLocaleTimeString()
}, 1000 )

```

## Project 4 Guess number JS code

```Javascript 

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');    // id #
const guessSlot = document.querySelector('.guesses');       // classname .
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```
## Project 5 Generate random color 

```Javascript
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for( let i = 0; i < 6; i++ ){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
};

console.log(randomColor());

let intervalId;
const startColorChange = function(){
    if(!intervalId){
        intervalId = setInterval(bgColor, 1000);
    }
    function bgColor(){
        document.body.style.backgroundColor = randomColor();
    }   
};

const stopColorChange = function(){
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startColorChange);
document.querySelector('#stop').addEventListener('click', stopColorChange);
```

## Project 6 Keyboard click letters

```Javascript
const insert = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `<div class='color'>
        <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'Space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
    </div>`;
});
```