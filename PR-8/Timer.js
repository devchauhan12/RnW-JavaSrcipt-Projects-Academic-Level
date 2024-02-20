let hours = 0;
let mins = 0;
let seconds = 0;
let timer

let Start = document.querySelector('#start')
Start.addEventListener("click", function (e) {
    e.preventDefault();
    startTimer();
    document.getElementById('start').setAttribute('disabled', '');
}
);
let Stop = document.querySelector('#stop')
Stop.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById('start').removeAttribute('disabled');
    clearTimeout(timer);
}
);
let Reset = document.querySelector('#reset')
Reset.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById('start').removeAttribute('disabled');
    hours = 0; mins = 0; seconds = 0;
    document.getElementById('hours').innerText = '00 :'
    document.getElementById('mins').innerText = '00 :'
    document.getElementById('seconds').innerText = '00'
    clearTimeout(timer);

}
);

function startTimer() {

    seconds++;
    if (seconds > 59) {
        seconds = 0; mins++;
        if (mins > 59) {
            mins = 0; hours++;
            if (hours < 10) {
                document.getElementById('hours').innerText = `0${hours} :`
            } else {
                document.getElementById('hours').innerText = `${hours} :`
            }
        }

        if (mins < 10) {
            document.getElementById('mins').innerText = `0${mins} :`
        }
        else {
            document.getElementById('mins').innerText = `${mins} :`
        }
    }
    if (seconds < 10) {
        document.getElementById('seconds').innerText = `0${seconds}`
    } else {
        document.getElementById('seconds').innerText = `${seconds}`
    }

    timer = setTimeout(startTimer, 1000);
}

