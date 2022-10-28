const play = document.querySelector('.play');
const reset = document.querySelector('.reset');
const clock = document.querySelector('.time');
let timerInterval;

let stopWatch = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    state: false
}


function tempo(){
    stopWatch.seconds++;
    if (stopWatch.seconds > 59){
        stopWatch.seconds = 0;
        stopWatch.minutes++;
        if(stopWatch.minutes > 59){
            stopWatch.minutes = 0;
            stopWatch.hours++;
        }
    }
    clock.innerHTML = ('00'+ stopWatch.hours).slice(-2) + ':' + ('00'+ stopWatch.minutes).slice(-2) + ':' + ('00'+ stopWatch.seconds).slice(-2);
}


play.addEventListener('click',function(){
    if(stopWatch.state === false){
        timerInterval = setInterval(tempo, 1000);
        play.innerHTML = 'STOP';
        stopWatch.state = true;
    }else{
        clearInterval(timerInterval);
        play.innerHTML = 'START';
        stopWatch.state = false;
    }
})

reset.addEventListener('click', function(){
    stopWatch.seconds = 0;
    stopWatch.minutes = 0;
    stopWatch.hours = 0;
    clearInterval(timerInterval);
    clock.innerHTML = '00:00:00';
    if(stopWatch.state){
        play.innerHTML = 'START';
        stopWatch.state = false;
    }
})