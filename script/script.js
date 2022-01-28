const bgcores = ['Cyan','White', 'Yellow', 'Pink', 'Green','Purple']
let nomeCores = document.getElementById('cores')

function mudaCores(){
    let aleatorio = Math.floor(Math.random()*6)
    nomeCores.innerHTML = `<p id='paragrafo'>Background Color = ${bgcores[aleatorio]}</p>`
    document.body.style.backgroundColor = `${bgcores[aleatorio]}`
    document.getElementById('paragrafo').style.cssText = `color: ${bgcores[aleatorio]}`
}