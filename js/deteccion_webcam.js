const d = document,
    n = navigator;
    export default function webCamDetection(id){
        const $video = d.getElementById(id);
        if(n.mediaDevices.getUserMedia){
            n.mediaDevices.getUserMedia({video:true, audio:true}).then((strem) => {
                $video.srcObject = strem;
                $video.play();
                console.log("ya se hizo")
            }).catch((err) => {
                $video.insertAdjacentHTML("beforebegin", `<p>Sucedio el siguiente error:<mark>${err}</mark></p>`);
                console.log(`Sucedio el siguiente error: ${err}`);
            });
        }
    };