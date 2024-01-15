import "./App.css";
//import BotonGeneral from "./componentes/botonGeneral.js";
import BotonDescarga from "./componentes/botonDescarga.js";
import SectionHabilidad from "./componentes/sectionHabilidad.js";
import Navegacion from "./componentes/navegacion.js";

function App() {
  return (
    <>
    
    <body>
    <Navegacion />
      <section id="section-inicio" class="sect">
        <div class="custom-div">
          <div class="container">
            <div class="content">
              <div class="content__container">
                <p class="content__container__text">Hello</p>

                <ul class="content__container__list">
                  <li class="content__container__list__item">world !</li>
                  <li class="content__container__list__item">coder !</li>
                  <li class="content__container__list__item">users !</li>
                  <li class="content__container__list__item">uiverse</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-div">
          <div class="animacion">
            <h2>DESARROLLADOR WEB</h2>
          </div>
          <br />
          <p className="parrafo">
            ¡Hola! soy <span style={{ color: "#5468FF" }}>Esteban Sierra</span>,
            un apasionado desarrollador web con un enfoque creativo y soluciones
            tecnológicas innovadoras. Mi viaje en el mundo del desarrollo
            comenzó con la curiosidad de explorar nuevas posibilidades y la
            pasión por crear experiencias digitales impactantes.
          </p>
          <br />

          <BotonDescarga nombre={"Descargar HV"} href={"./HVEsteban.pdf"} />
        </div>
      </section>
      <SectionHabilidad />
    </body>
    </>
  );
}

export default App;
