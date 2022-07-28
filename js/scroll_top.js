export function scrollTop(btn){
    const $btn = document.querySelector(btn);
    window.addEventListener("scroll", (e) => {
        if(window.scrollY > 300){
           document.querySelector(btn).classList.add("scrollTopHidden");
        }else{
            $btn.classList.remove("scrollTopHidden");
        }
    });
    $btn.addEventListener("click", () => {
        window.scroll(0, 0);
    });
}