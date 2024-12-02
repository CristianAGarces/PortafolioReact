import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import CustomFetch from "./CustomFetching";
import { useForm, ValidationError } from "@formspree/react";
import { FaLocationDot } from "react-icons/fa6";
import "../../styles/contacto.css";

const Contact = () => {
  const [captchaValido, setCaptchaValido] = useState(false);
  const [formValido, setFormValido] = useState(true);
  const captcha = useRef<ReCAPTCHA|null>(null);

  const { data, loading, error } = CustomFetch("CristianAGarces");
  const [state, handleSubmit] = useForm("mdknqzeq");
  const [formResetKey, setFormResetKey] = useState(0);

  useEffect(() => {
    if (state.succeeded) {
      alert("Gracias por tu aporte");
      setFormResetKey((prevKey) => prevKey + 1);
      setCaptchaValido(false);
    }
  }, [state.succeeded]);

  const onChange = () => {
    if (captcha.current && captcha.current.getValue()) {
      setCaptchaValido(true);
    } else {
      setCaptchaValido(false);
    }
  };

  const handleCombinedSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const allFieldsFilled = Array.from(formData.values()).every(
      (value) => typeof value === "string" && value.trim() !== ""
    );

    if (allFieldsFilled && captchaValido) {
      setFormValido(true);
      handleSubmit(event);
    } else {
      setFormValido(false);
      if (!captchaValido) {
        alert("Por favor acepte el captcha");
      } else {
        alert("Por favor llene todos los campos del formulario");
      }
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="formulario">
      <form
        key={formResetKey}
        action="https://formspree.io/f/mdknqzeq"
        method="POST"
        onSubmit={handleCombinedSubmit}
      >
        <h2>Contáctame</h2>
        <p className="text-form">Si te gustó mi portafolio ¡contáctame!</p>
        <input type="text" name="name" placeholder="Nombre completo" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input name="email" type="email" placeholder="Email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input name="subject" type="text" placeholder="Asunto" required />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
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
        <br />
        <div className="recaptcha">
          <ReCAPTCHA
            ref={captcha}
            sitekey="6LfFPpAqAAAAAAhU-kMp3X2kip1WYjH5huO_wTUE"
            onChange={onChange}
          />
        </div>
        {!formValido && !captchaValido && (
          <div className="error-captcha">
            Por favor acepte el captcha y llene todos los campos
          </div>
        )}
        <button
          type="submit"
          className="btn-envioForm"
          disabled={state.submitting}
          title="Enviar form"
        >
          {state.submitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
      <aside className="espacio-git">
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
              target="_blank"
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
