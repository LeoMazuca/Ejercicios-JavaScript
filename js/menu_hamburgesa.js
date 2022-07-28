 export default function hamburgerMenu(menuBtn, menuList, menuLink, span_one, span_two, span_three){
     const d = document;

     d.addEventListener("click", (e) =>{
        if(e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`) || e.target.matches(menuLink)){
            d.querySelector(menuList).classList.toggle("open-menu");
            d.querySelector(span_one).classList.toggle("span-one");
            d.querySelector(span_two).classList.toggle("span-two");
            d.querySelector(span_three).classList.toggle("span-three");
            d.querySelector(menuBtn).classList.toggle("fijar-button");
        }
        });
 }
 
 
 
 /* const $menu_button = document.getElementById("menu-button"),
    $menu_list = document.querySelector(".menu-list"),
    $span_one = document.getElementById("span-one"),
    $span_two = document.getElementById("span-two"),
    $span_three = document.getElementById("span-three");;



 function mostrarMenu (e){
    $menu_list.classList.toggle("open-menu");
    $span_two.classList.toggle("span-two");
    $span_one.classList.toggle("span-one");
    $span_three.classList.toggle("span-three"); 
    $menu_button.classList.toggle("fijar-button");
}

document.addEventListener("click", (e) =>{

if(e.target.matches(".header button") || e.target.matches(".header button *")){
    mostrarMenu(e);
}

if(e.target.matches(".menu-item a")){
  mostrarMenu(e);
}
});
 */