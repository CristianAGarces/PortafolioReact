import CustomFetch from "./CustomFetching";
import { useForm, ValidationError } from "@formspree/react";
import { FaLocationDot } from "react-icons/fa6";
import "../../styles/contacto.css";

const Contact = () => {
  const { data, loading, error } = CustomFetch("CristianAGarces");
  const [state, handleSubmit] = useForm("xyzyebna");
  if (state.succeeded) {
    return <p>Gracias por tu aporte</p>;
  }

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="formulario">
      <form onSubmit={handleSubmit}>
        <h2>Contáctame</h2>
        <p className="text-form">Si te gustó mi portafolio ¡contáctame!</p>
        <input type="text" name="name" placeholder="Nombre completo" required />
        <input name="email" type="email" placeholder="Email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input name="subject" type="text" placeholder="Asunto" required />
        <textarea
          className="campo"
          name="message"
          placeholder="Escribe tu mensaje"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br/>
        <button
          type="submit"
          className="btn-envioForm"
          disabled={state.submitting}
        >Enviar</button>
      </form>
      <aside data-aos="fade-up" className="espacio-git">
        <h2>
          Cuenta de GitHub<span>&#128526;</span>
        </h2>
        <div className="github-count">
          <div className="git">
            <div className="text-git">
              <p>{data.login}</p>
              <p>{data.name}</p>
            </div>
            <img
              src={data.avatar_url}
              alt={`usuario ${data.name}`}
              title={`usuario ${data.name}`}
            />
            <p className="location">
              <FaLocationDot />
              {data.location}
            </p>
            <p className="bio">{data.bio}</p>
            <div className="text-git">
              <p>Seguidores: {data.followers}</p>
              <p>Siguiendo: {data.following}</p>
            </div>
            <a
              id="button"
              title={`ir a mi github de: ${data.name}`}
              href={`https://github.com/CristianAGarces`}
            >
              Ir a mi GitHub
            </a>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Contact;
