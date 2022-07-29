let isChecked = localStorage.getItem("checked");
export function lightMode(body, keyboard, clock, excercisesH1, buttons, containerFicha){
    const $btnLightMode = document.getElementById("light-mode"),
    $checkbox = document.getElementById("checked"),
    $clocks = document.querySelectorAll(clock),
    $buttons = document.querySelectorAll(buttons);
    const addLigth = () => {
            document.querySelector(body).classList.add("light");
            document.querySelector(keyboard).classList.add("keyboardLight");
            $clocks.forEach(element => {
                element.classList.add("clockLight");
            });
            document.querySelector(excercisesH1).classList.add("excercisesLight");
            document.querySelector(buttons).classList.add("buttonsLight");
            document.querySelector(containerFicha).classList.add("containerLight");
            $checkbox.checked = true;
        localStorage.setItem("checked", "true");

    },
    addDark = () => {
        document.querySelector(body).classList.remove("light");
        document.querySelector(keyboard).classList.remove("keyboardLight");
        $clocks.forEach(element => {
            element.classList.remove("clockLight");
        });
        document.querySelector(excercisesH1).classList.remove("excercisesLight");
        document.querySelector(buttons).classList.remove("buttonsLight");
        document.querySelector(containerFicha).classList.remove("containerLight");
        localStorage.setItem("checked", "false");
    };
    if(isChecked === "true"){
        addLigth();
    }
    $btnLightMode.addEventListener("click", e => {
        if($checkbox.checked){
            addLigth();
        }else{
            addDark();
        }
    });
}
