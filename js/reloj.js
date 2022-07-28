const d = document;
export function digitalClock(btnPlay, btnStop){
    let clockTempo;
    d.addEventListener("click", (e) => {
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(() => {
                let clockHour = new Date();
                let hh = clockHour.getHours() * 30;
                let mm = clockHour.getMinutes() * 6;
                let ss = clockHour.getSeconds() * 6;
                
                d.querySelector("#hr").style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
                d.querySelector("#mn").style.transform = `rotateZ(${mm}deg)`;
                d.querySelector("#sc").style.transform = `rotateZ(${ss}deg)`;

            }, 1000);
            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(btnPlay).disabled = false;
        }
    });
}
export function alarm(sound, btnPlay, btnStop){
    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;
    d.addEventListener("click", (e) => {
        if(e.target.matches(btnPlay)){
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 2000);
            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnPlay).disabled = false;
        }
    });
}