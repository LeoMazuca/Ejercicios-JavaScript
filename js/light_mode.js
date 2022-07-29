let isChecked = localStorage.getItem("checked");
export function lightMode(body, keyboard, clock, excercisesH1, buttons){
    const $btnLightMode = document.getElementById("light-mode"),
    $checkbox = document.getElementById("checked"),
    $clocks = document.querySelectorAll(clock),
    $buttons = document.querySelectorAll(buttons);
    if(isChecked === "true"){
        document.querySelector(body).classList.add("light");
        document.querySelector(keyboard).classList.add("keyboardLight");
        $clocks.forEach(element => {
            element.classList.add("clockLight");
        });
        document.querySelector(excercisesH1).classList.add("excercisesLight");
        document.querySelector(buttons).classList.add("buttonsLight");
        $checkbox.checked = true;
    }
    $btnLightMode.addEventListener("click", e => {
        if($checkbox.checked){
            document.querySelector(body).classList.add("light");
            document.querySelector(keyboard).classList.add("keyboardLight");
            $clocks.forEach(element => {
                element.classList.add("clockLight");
            });
            document.querySelector(excercisesH1).classList.add("excercisesLight");
            document.querySelector(buttons).classList.add("buttonsLight");
            localStorage.setItem("checked", "true");
        }else{
            document.querySelector(body).classList.remove("light");
            document.querySelector(keyboard).classList.remove("keyboardLight");
            $clocks.forEach(element => {
                element.classList.remove("clockLight");
            });
            document.querySelector(excercisesH1).classList.remove("excercisesLight");
        document.querySelector(buttons).classList.remove("buttonsLight");
            localStorage.setItem("checked", "false");
        }
    });
}
