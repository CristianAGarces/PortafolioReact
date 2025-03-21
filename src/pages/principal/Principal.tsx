import "../../styles/principal.css";
import FotoPerfil from "../../images/Perfil.gif";

function Principal() {
  return (
    <section id="presentacion">
      <div className="izquierda">
        <h1>Hola, mi nombre es: Cristian Garces.</h1>
        <h2>Desarrollador Frontend "Junior".</h2>
        <p>
          Hola, como estas. Bienvenido a mi portafolio, en esta ocasion te
          hablare un poco acerca de mi, mis experiencias, mis proyectos, las
          tecnologias que manejo, mis estudios y el por que deberias de
          contratarme.
        </p>
      </div>
      <div className="derecha">
        <aside>
          <img
            title="Foto perfil"
            className="imgPresentacion"
            src={FotoPerfil}
          />
        </aside>
      </div>
    </section>
  );
}

export default Principal;
