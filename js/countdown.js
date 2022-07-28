export function minutesToMidnight(date, message){
    const daysInMS = 1000 * 60 * 60 * 24,
    hoursInMS = 1000 * 60 * 60,
    minutesInMS = 1000 * 60,
    secondsInMS = 1000;
    
    let counter  = setInterval(() => {
        let today = new Date().getTime(),
        timeMS = date.getTime() - today,
        days = Math.floor(timeMS/daysInMS),
        hours = ("0" + Math.floor((timeMS % daysInMS) /hoursInMS)).slice(-2),
        minutes = ("0" + Math.floor((timeMS % hoursInMS)/minutesInMS)).slice(-2),
        seconds = ("0" + Math.floor((timeMS % minutesInMS)/secondsInMS)).slice(-2);

        if(timeMS < 0 ){
            document.querySelector(".message").textContent = message;
            clearInterval(counter);
        }else{
            document.querySelector("#hr2").style.transform = `rotateZ(${(hours * 30)+((minutes * 6)/12)}deg)`;
            document.querySelector("#mn2").style.transform = `rotateZ(${minutes * 6}deg)`;
            document.querySelector("#sc2").style.transform = `rotateZ(${seconds * 6}deg)`;
            
            document.querySelector(".number1").textContent = days;
            document.querySelector(".number2").textContent = hours;
            document.querySelector(".number3").textContent = minutes;
            document.querySelector(".number4").textContent = seconds;
    
            
            if(days === 0
            && hours === 0
            && minutes === 0
            && seconds === 0){
                document.querySelector(".message").textContent = message;
                clearInterval(counter);
            }
        }
    }, 1000);
}