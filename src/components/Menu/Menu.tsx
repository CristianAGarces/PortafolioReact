import PropsBodyMenu from "./PropsBodyMenu";
import Logo from "../../images/logo cagv.jpeg";
import "../../styles/menu.css";

type Props = {
  contacto: string;
};

const Menu = ({ contacto }: Props) => {
  return (
    <header>
      <a className="direccion-menu" href="index.html">
        <img src={Logo} title="Logo Imagen" className="menu-logo" />
      </a>
      <nav className="menu">
        <label htmlFor="menu_hambur" className="labe-hambur">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list-ul"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            />
          </svg>
        </label>
        <input type="checkbox" name="" id="menu_hambur" />
        <ul className="ul-links">
          <PropsBodyMenu
            link="#presentacion"
            title="Presentacion"
            item="Presentacion"
          />
          <PropsBodyMenu
            link="#about-me"
            title="Acerca de mi"
            item="Acerca de mi"
          />
          <PropsBodyMenu
            link="#experiencia"
            title="Experiencia"
            item="Experiencia"
          />
          <PropsBodyMenu
            link="#tecnologias"
            title="Tecnologias"
            item="Tecnologias"
          />
          <PropsBodyMenu link="#gustos" title="Mis gustos" item="Mis Gustos" />
          <li>
            <a className="contacto-menu" href={contacto} title="Contacto">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
