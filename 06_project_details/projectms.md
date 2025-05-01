## Project releated DOM

## Project link [Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-rgb4qxqp?file=1-colorChanger%2Fchaiaurcode.js)

## Color change JS code 

``` Javascript 
console.log("Hi");

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