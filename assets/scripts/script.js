var balls = document.querySelector('.balls')
var quant = document.querySelectorAll('.slides .image')
var actual = 0
var image = document.getElementById('actual')
var next = document.getElementById('next')
var back = document.getElementById('back')

for(let i=0; i< quant.length; i++){
    var div = document.createElement('div')
    div.id = i 
    balls.appendChild(div)
}

document.getElementById('0').classList.add('imgActual')

var pos = document.querySelectorAll('.balls div')

for(let i=0; i< pos.length; i++) {
    pos[i].addEventListener('click', ()=>{
        actual = pos[i].id
        slide()
    })
}

back.addEventListener('click', ()=>{
    actual--
    slide()

})

next.addEventListener('click', ()=>{
    actual++
    slide()

})

function slide(){
    if(actual >= quant.length){
        actual = 0
    }
    else if(actual < 0){
        actual = quant.length-1
    }
    document.querySelector('.imgActual').classList.remove('.imgActual')
    image.style.marginLeft = -600*actual+'px'
    document.getElementById(actual).classList.add('imgActual')
}
