import ListTech from "./ListTech";
import "../../styles/tech.css";

const Tech = () => {
  return (
    <section id="tecnologias">
      <h2>Las tecnologias que manejo:</h2>
      <p>
        En esta seccion voy a hablar de las tecnologias en las cuales he
        trabajado y tengo experiencias a nivel junior en el uso de estas
      </p>
      <div className="contenedor-tecnologias">
        {ListTech.map((tech) => (
          <>
            <label className="label" htmlFor={`btn-modal-${tech.id}`}>
              <div className="cajas-tech" key={tech.id} title={tech.name}>
                <img className="img-tech" src={tech.img} title={tech.name} />
                <div className="content-text">
                  <h4>{tech.name}</h4>
                  <p>{tech.description}</p>
                </div>
              </div>
            </label>
            <input type="checkbox" id={`btn-modal-${tech.id}`} />
            <div className={`container-modal`}>
              <div className="content-modal">
                <h2>{tech.name}</h2> <p>{tech.explicacion}</p>
                <div className="btn-cerrar">
                  <label className="label" htmlFor={`btn-modal-${tech.id}`}>Cerrar</label>
                </div>
                <label
                  htmlFor={`btn-modal-${tech.id}`}
                  className="cerrar-modal label"
                ></label>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Tech;
