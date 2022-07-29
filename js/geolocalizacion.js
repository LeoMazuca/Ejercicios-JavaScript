export default function geolocalizacion(posicion){
    const $div = document.querySelector(posicion),
     options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        let crd = pos.coords;

        $div.innerHTML = `
          <p>Tu posicion actual es:</p>
          <br></br>
          <p>Latitud: <mark>${crd.latitude}</mark></p>
          <p>Longitud: <mark>${crd.longitude}</mark></p>
          <p>Presicion: <mark>${Math.round(crd.accuracy)}</mark> Metros</p>
          <a href="https://www.google.com.mx/maps/@${crd.latitude},${crd.longitude},18z" target="_blank">Ver en Google Maps</a>
        `;
      };
      
      function error(err) {
          $div.innerHTML = `
                <p>Error (${err.code}): ${err.message}</p>
              `;
      };
    navigator.geolocation.getCurrentPosition(success, error, options);
}