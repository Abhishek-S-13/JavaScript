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