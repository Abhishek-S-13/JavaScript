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