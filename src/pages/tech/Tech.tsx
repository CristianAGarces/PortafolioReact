import ListTech from "./ListTech";
import "../../styles/tech.css";

const Tech = () => {
  return (
    <section id="tecnologias">
      <h2 className="title-tech">Las tecnologias que manejo:</h2>
      <p className="text-tech">
        En esta seccion voy a hablar de las tecnologias en las cuales he
        trabajado y tengo experiencias a nivel junior en el uso de estas
      </p>
      <ul className="contenedor-tecnologias">
        {ListTech.map((tech, index) => (
          <li key={index} className="item">
            <label className="label" htmlFor={`btn-modal-${tech.id}`}>
              <div className="cajas-tech" title={tech.name}>
                <img className="img-tech" src={tech.img} title={tech.name} />
                <div className="content-text">
                  <h4>{tech.name}</h4>
                  <p>{tech.description}</p>
                </div>
              </div>
            </label>
            <input type="checkbox" id={`btn-modal-${tech.id}`} />
            <div className={`container-modal`}>
              <div className="content-modal"><div className="header-content">
                <img src={tech.img} alt={tech.name} title={tech.name}/>
                <h2 className="title-modal">{tech.name}</h2></div> <p>{tech.explicacion}</p>
                <div className="btn-cerrar">
                  <label className="label" htmlFor={`btn-modal-${tech.id}`}>Cerrar</label>
                </div>
                <label
                  htmlFor={`btn-modal-${tech.id}`}
                  className="cerrar-modal label"
                ></label>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tech;
