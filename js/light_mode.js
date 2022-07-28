let isChecked = localStorage.getItem("checked");
export function lightMode(){
    const $btnLightMode = document.getElementById("light-mode"),
    $checkbox = document.getElementById("checked");
    if(isChecked === "true"){
        document.querySelector("body").classList.add("light");
        $checkbox.checked = true;
    }
    $btnLightMode.addEventListener("click", e => {
        if($checkbox.checked){
            document.querySelector("body").classList.add("light");
            localStorage.setItem("checked", "true");
        }else{
            document.querySelector("body").classList.remove("light");
            localStorage.setItem("checked", "false");
        }
    });
}
