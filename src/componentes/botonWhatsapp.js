import React from "react";
import "../estilosComponentes/botonWhatsapp.css";
import whatsapp from "../imagenes/whatsapp.png";

const BotonWhatsapp = () => {
  return (
    <div class="container-boton">
    <a href="https://wa.me/+573008883656?text=Hola%20Esteban%20" target="_blank">
        <img class="boton" src={whatsapp} alt=""/>
    </a>
</div>
  );
};

export default BotonWhatsapp;
