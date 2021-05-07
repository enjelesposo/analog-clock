

const secondHand = document.querySelector('.hand-sec');
const minsHand = document.querySelector('.hand-min');
const hourHand = document.querySelector('.hand-hour');

function setDate(){         // needs to be run every second
    const now = new Date();

    // SEC HAND
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    console.log(seconds)
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    // MINS HAND 
    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegree}deg)`

    // HOUR HAND
    const hour = now.getHours();
    const hourDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(function(){
    setDate();
}, 1000)