import React from "react";
import "../estilosComponentes/sectionExp.css";

const SectionEstudios = () => {
  return (
    <>
      <div
        class="animacion"
        id="exp-animado"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "40px",
        }}
      >
        <h2 id="section-exp" className="h1-proyectos">
          EXPERIENCIA LABORAL
        </h2>
      </div>
      <div id="contenedor">
        <div id="contenedor-interno">
          <div id="contenido1">
            <h2>Desarrollador web</h2>
            <label style={{ fontSize: "13px" }}>04/07/2023 - 03/01/2024</label>
          </div>
          <div id="contenido2">
            <h3>Baterias Willard</h3>
            <br />
            <p id="parrafo-exp" className="parrafo">
              Desarrollo del software web (Backend y FrontEnd) interno de la
              empresa con lenguaje de programación{" "}
              <span style={{ color: "#5468FF" }}>php</span> y{" "}
              <span style={{ color: "#5468FF" }}>javascript</span>, maquetado de
              las páginas con <span style={{ color: "#5468FF" }}>html</span> y{" "}
              <span style={{ color: "#5468FF" }}>bootstrap</span>, uso de{" "}
              <span style={{ color: "#5468FF" }}>jquery</span> y{" "}
              <span style={{ color: "#5468FF" }}>ajax</span>. Trabajé con base
              de datos DB2 para la gestión de los datos de la empresa y tambien
              con <span style={{ color: "#5468FF" }}>git</span> para el control
              de versiones del código.
            </p>
          </div>
        </div>
      </div>



      <div id="contenedor">
        <div id="contenedor-interno">
          <div id="contenido1">
            <h2>Analista o Gestor de base de datos</h2>
            <label style={{ fontSize: "13px" }}>08/04/2024 - ACTUAL</label>
          </div>
          <div id="contenido2">
            <h3>Ises Ingenieria y Soluciones</h3>
            <br />
            <p id="parrafo-exp" className="parrafo">
              RECIBIR, GESTIONAR Y EJECUTAR LA EXTRACCION DE
              INFORMACION DE LA BASE DE DATOS A TRAVES DE
              CONSULTAS O PROCEDIMIENTOS ALMACENADOS QUE SE
              REQUIERA, CON EL FIN DE ANALIZAR Y ENTREGAR EL
              PRODUCTO SOLICITADO,BRINDANDO APOYO
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionEstudios;
