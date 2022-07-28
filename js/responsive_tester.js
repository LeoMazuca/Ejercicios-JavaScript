export default function responsiveTester(form){
    const $form = document.getElementById(form);
    let tester;
    document.addEventListener("submit", e => {
        if  (e.target === $form){
            e.preventDefault();
            tester = window.open($form.url.value, "tester", `innerWidth = ${$form.width.value}, innerHeight = ${$form.height.value}`);
        }
    });
    document.addEventListener("click", e => {
        if  (e.target === $form.cerrar){
            tester.close();
        }
    });
};
const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
    label.innerHTML  = label.innerText.split("").map((letter, idx) => `<span style = "transition-delay:${idx *50}ms">${letter}</span>`).join("");
});