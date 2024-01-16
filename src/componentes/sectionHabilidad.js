import React from "react";
import "../estilosComponentes/sectionHabilidad.css";
import miImagen from "../imagenes/iconReact.png";
import miImagen2 from "../imagenes/proyecto2.png";
import miImagen3 from "../imagenes/proyecto1.png";
import css from "../imagenes/css2.png";
import html from "../imagenes/html.png";
import jquery from "../imagenes/jquery2.png";
import js from "../imagenes/java.png";
import mysql from "../imagenes/mysql2.png";
import node from "../imagenes/node.png";
import php from "../imagenes/php2.png";
import boots from "../imagenes/boots2.png";
import portf from "../imagenes/portf.png";
import powerbi from "../imagenes/powerbi.png";
import excel from "../imagenes/excel.png";
import git from "../imagenes/git.png";
import access from "../imagenes/access.png";
import react2 from "../imagenes/react2.png";
import wordpress from "../imagenes/wordpress.png";

const SectionHabilidad = () => {
  return (
    <section
      style={{ paddingTop: "140px" }}
      id="section-habilidad"
      className="sect-habilidades"
    >
      <div class="custom-div">
        <div
          style={{ display: "flex", justifyContent: "center" }}
          class="animacion"
        >
          <h2 className="h1-proyectos">HABILIDADES</h2>
        </div>
      </div>
      <div
        class="custom-div"
        style={{
          background: "linear-gradient(225deg, #00010a, #00010c)",
          boxShadow: "-50px 50px 100px #000004, 50px -50px 100px #000212",
          borderRadius: "37px",
        }}
      >
        <div class="contenedor-h">
          <div class="columna-h">
            <img src={js} alt="Imagen 1" class="image-habilidad-h" />
            <br />
            <label>Javascript</label>
          </div>
          <div class="columna-h">
            <img src={react2} alt="Imagen 1" class="image-habilidad-h" />
            <br />
            <label>React</label>
          </div>
          <div class="columna-h">
            <img src={php} alt="Imagen 1" class="image-habilidad-h" />
            <br />
            <label>Php</label>
          </div>
          <div class="columna-h">
            <img src={node} alt="Imagen 1" class="image-habilidad-h" />
            <br />
            <label>Node js</label>
          </div>
          <div class="columna-h">
            <img src={html} alt="Imagen 1" class="image-habilidad-h" />
            <br />
            <label>Html</label>
          </div>
          <div class="columna-h">
            <img src={mysql} alt="Imagen 1" class="image-habilidad-h" />
            <br />
            <label>Mysql</label>
          </div>
          <div class="columna-h">
            <img src={boots} alt="Imagen 1" class="image-habilidad-h" />
            <br />
            <label>Bootstrap</label>
          </div>
          <div class="columna-h">
            <img src={css} alt="Imagen 1" class="image-habilidad-h" />
            <br />
            <label>Css</label>
          </div>
          <div class="columna-h">
            <img src={powerbi} alt="Imagen 1" class="image-habilidad-h" />
            <br />
            <label>Power bi</label>
          </div>
          <div class="columna-h">
            <img src={excel} alt="Imagen 1" class="image-habilidad-h" />
            <br />
            <label>Excel</label>
          </div>
          <div class="columna-h">
            <img src={git} alt="Imagen 1" class="image-habilidad-h" />
            <br />
            <label>Git</label>
          </div>
          <div class="columna-h">
            <img src={access} alt="Imagen 1" class="image-habilidad-h" />
            <br />
            <label>Access</label>
          </div>
          <div class="columna-h">
            <img src={jquery} alt="Imagen 1" class="image-habilidad-h" />
            <br />
            <label>Jquery</label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHabilidad;
