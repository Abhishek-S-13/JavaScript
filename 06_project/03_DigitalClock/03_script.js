const clk = document.getElementById('clock')
// const clk = document.querySelector('#clock') // this type we can use 

setInterval( function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clk.innerHTML = date.toLocaleTimeString()
}, 1000 )