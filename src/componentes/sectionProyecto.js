import React from "react";
import "../estilosComponentes/sectionProyecto.css";
import miImagen from "../imagenes/iconReact.png";
import miImagen2 from "../imagenes/proyecto2.png";
import miImagen3 from "../imagenes/proyecto1.png";
import css from "../imagenes/css.png";
import html from "../imagenes/html.png";

import js from "../imagenes/js.png";
import mysql from "../imagenes/mysql.png";

import php from "../imagenes/php.png";
import boots from "../imagenes/boots.png";
import portf from "../imagenes/portf.png";
import sistemaPortf from "../imagenes/sistemaPortf.png";

const SectionProyecto = () => {
  return (
    <div style={{ paddingTop: "380px" }}>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        class="animacion"
      >
        <h2 className="h1-proyectos">PROYECTOS WEB</h2>
      </div>
      <section id="section-proyecto" className="sect-habilidad">
        <div className="column">
          <div class="card">
            <div class="card-image">
              <img
                class="img-habilidad"
                src={miImagen3}
                alt="Proyecto noticias"
              />
            </div>
            <div class="card-description">
              <p class="text-title">Noticiero</p>
              <p class="text-body">
                Pagina web de noticiero con distintas secciones y modulos.
              </p>
              <div class="image-container">
                <img src={html} alt="Imagen 1" class="round-image" />
                <img src={js} alt="Imagen 1" class="round-image" />
                <img src={css} alt="Imagen 1" class="round-image" />
                <img src={php} alt="Imagen 1" class="round-image" />
                <img src={mysql} alt="Imagen 1" class="round-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div class="card">
            <div class="card-image">
              <img
                class="img-habilidad"
                src={miImagen2}
                alt="Proyecto noticias"
              />
            </div>
            <div class="card-description">
              <p class="text-title">Buscador de recetas</p>
              <p class="text-body">
                Pagina moderna con buscador de receta mediante consumo de API.
              </p>
              <div class="image-container">
                <img src={miImagen} alt="Imagen 1" class="round-image" />
                <img src={boots} alt="Imagen 1" class="round-image" />
                <img src={css} alt="Imagen 1" class="round-image" />
                <img src={js} alt="Imagen 1" class="round-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div class="card">
            <div class="card-image">
              <img class="img-habilidad" src={portf} alt="Proyecto noticias" />
            </div>
            <div class="card-description">
              <p class="text-title">Portafolio web</p>
              <p class="text-body">
                Portafolio web con distintas secciones con informacion
                profesaional y personal.
              </p>
              <div class="image-container">
                <img src={miImagen} alt="Imagen 1" class="round-image" />
                <img src={mysql} alt="Imagen 1" class="round-image" />
                <img src={html} alt="Imagen 1" class="round-image" />
                <img src={css} alt="Imagen 1" class="round-image" />
                <img src={js} alt="Imagen 1" class="round-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div class="card">
            <div class="card-image">
              <img
                class="img-habilidad"
                src={sistemaPortf}
                alt="Proyecto noticias"
              />
            </div>
            <div class="card-description">
              <p class="text-title">Red social de albumes</p>
              <p class="text-body">
                Gestion de contenido y perfil de cada usuario, cuenta con feed
                en inicio.
              </p>
              <div class="image-container">
                <img src={miImagen} alt="Imagen 1" class="round-image" />
                <img src={mysql} alt="Imagen 1" class="round-image" />
                <img src={html} alt="Imagen 1" class="round-image" />
                <img src={css} alt="Imagen 1" class="round-image" />
                <img src={js} alt="Imagen 1" class="round-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionProyecto;
