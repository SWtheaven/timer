const iniciar = document.getElementById('startButton');
const parar = document.getElementById('stopButton');
const resetar = document.getElementById('resetButton');

iniciar.addEventListener('click', start);
parar.addEventListener('click', stop);
resetar.addEventListener('click', reset);

let time = 0;
let timer = null;
let h2 = document.querySelector('h2');


function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;

    return `${minutes.toString().padStart(2, '0')}:` +
           `${seconds.toString().padStart(2, '0')}:` +
           `${milliseconds.toString().padStart(3, '0')}`;
}

function start() {
    if (timer) return;
    timer = setInterval(function () {
        time += 10;
        h2.innerHTML = formatTime(time);
    }, 10);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;
    time = 0;
    h2.innerHTML = formatTime(time);
}

h2.innerHTML = formatTime(time);