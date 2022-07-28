export default function(label){
    const $label = document.querySelector(label);


    window.addEventListener('offline', function(e) { 
        $label.innerText = "Desconectado";
        $label.classList.add("desconectado");
        this.setTimeout(() => {
        $label.classList.remove("desconectado");
        }, 2000);
    });

    window.addEventListener('online', function(e) { 
        $label.innerText = "Conexion Establecida";
        $label.classList.add("conectado");
        this.setTimeout(() => {
        $label.classList.remove("conectado");
        }, 2000);
    });
    
}