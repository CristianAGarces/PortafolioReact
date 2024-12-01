import ListProject from "./ListProject";
import "../../styles/experiencia.css";

const Experiencia = () => {
  return (
    <section id="experiencia">
      <h2>Experiencia</h2>
      <p>En esta seccion les mostrare los proyectos en los que he trabajado</p>
      <ul className="proyectos">
        {ListProject.map((project) => (
          <li key={project.id}>
            <div className="seccion-proyecto" key={project.id}>
              <img src={project.img} alt={project.name} title={project.name} />
              <div className="div-contenido">
                <h3 className="letras">{project.name}</h3>
                <p>{project.description}</p>
              </div>
              {project.link && (
                <a className="irSitioweb" href={project.link}>
                  Ver sitio
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experiencia;
