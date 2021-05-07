
const hands = document.querySelector('.hand')
const secondHand = document.querySelector('.hand-sec');
const minuteHand = document.querySelector('.hand-min');
const hourHand = document.querySelector('.hand-hour');

function setDate(){         // needs to be run every second
    const now = new Date();

    // SEC HAND
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    console.log(secondsDegree)
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    // MINS HAND 
    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegree}deg)`

    // HOUR HAND
    const hour = now.getHours();
    const hourDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`

    if(seconds == 0 || mins == 0 || hour == 0){             // prevents hand from going haywire when deg. count reaches 0
        secondHand.style.transitionDuration = '0s';
        minuteHand.style.transitionDuration = '0s';
        hourHand.style.transitionDuration = '0s';
    } else {
        secondHand.style.transitionDuration = '0.5s';
        minuteHand.style.transitionDuration = '0.5s';
        hourHand.style.transitionDuration = '0.5s';
    }
    
}

setInterval(function(){
    setDate();
}, 1000)