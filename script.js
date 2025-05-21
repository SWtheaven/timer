const iniciar = document.getElementById('startButton')
const parar = document.getElementById('stopButton')
const resetar = document.getElementById('resetButton')

iniciar.addEventListener('click', start)
parar.addEventListener('click', stop)
resetar.addEventListener('click', reset)


let number = 0
let timer 
let h2 = document.querySelector('h2')


function start() {
    if (timer) return 
    timer = setInterval(function () {
        number++
        h2.innerHTML = number
    }, 1000)
}

function stop() {
    clearInterval(timer)
    timer = null
    h2.innerHTML = number
    
}

function reset() {
    clearInterval(timer)
    timer = null
    number = 0
    h2.innerHTML = number
}
    







