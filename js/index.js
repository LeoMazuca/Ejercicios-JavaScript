import { minutesToMidnight } from "./countdown.js";
import deteccionDispositovos from "./deteccion_dispositvos.js";
import deteccion_webcam from "./deteccion_webcam.js";
import detectar_conexion from "./detectar_conexion.js";
import { keyEvent } from "./eventos_teclado.js";
import geolocalizacion from "./geolocalizacion.js";
import responsiveMedia from "./iframe_responsive.js";
import { lightMode } from "./light_mode.js";
import hamburgerMenu from "./menu_hamburgesa.js";
import {digitalClock, alarm} from "./reloj.js";
import responsiveTester from "./responsive_tester.js";
import { scrollTop } from "./scroll_top.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu("#menu-button", ".menu-list", ".menu-item a", "#span-one", "#span-two", "#span-three");
    digitalClock("#activar-reloj", "#desactivar-reloj");
    alarm("assets/sounds/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    minutesToMidnight(new Date("Jul 30, 22 13:31:00"), "It's Midnight");
    scrollTop(".scrollTop");
    lightMode("body", ".keyboardContainer", ".clock", ".excercises", ".buttons", ".container");
    responsiveTester("responsive-tester");
    responsiveMedia("video", "(min-width: 1024px)",`
    <a href="https://www.youtube.com/embed/16geDhp5Xmg" target="_blank"
            >Ver Video</a
          >`, `
    <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/16geDhp5Xmg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`);
    responsiveMedia("map", "(min-width: 1024px)", `<a href="https://goo.gl/maps/FiM8Hw73gTTgC5gV6" target="_blank"
    >Ver Mapa</a
  >`, `
  <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57606.00558745456!2d-103.2980483550245!3d25.525871142650065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fc12ab5bac683%3A0x1dc8d33f6664b987!2sMatamoros%2C%20Coah.!5e0!3m2!1ses-419!2smx!4v1658786503818!5m2!1ses-419!2smx"
            width="560"
            height="315"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
  `);
  deteccionDispositovos("user-agent");
  deteccion_webcam("webCam");
  geolocalizacion(".datosLocalizacion");
});
d.addEventListener("keydown", e => {
    keyEvent(e);
});
detectar_conexion(".conexion");


