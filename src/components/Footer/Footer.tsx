import "../../styles/footer.css";
import LogoCagv from "../../images/logo cagv.jpeg";
import ImgPorta from '../../images/portafolio.jpeg'
import { FaMagnifyingGlassLocation } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div data-aos="fade-up" className="footer-container">
        <div className="links">
          <h3>Paguinas de documentacion</h3>
          <ul className="link-footer">
            <li>
              <a className="docs" href="https://portafoliocagv.netlify.app/">
                Portafolio CAGV anterior
              </a>
            </li>

            <li>
              <a
                className="docs"
                href="https://www.w3schools.com/html/default.asp"
              >
                Docs HTML
              </a>
            </li>

            <li>
              <a
                className="docs"
                href="https://www.w3schools.com/css/default.asp"
              >
                Docs CSS
              </a>
            </li>

            <li>
              <a
                className="docs"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              >
                Docs JS
              </a>
            </li>

            <li>
            
              <a className="docs" href="https://www.w3schools.com/">
                Docs General
              </a>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up" className="mi-info">
          <h3>Un poco mas de info</h3>
          <p>Aqui un logo que hice pero se que puedo mejorarlo demasiado.</p>
          <img title="By CAGV" src={LogoCagv} />
          <p>
            <FaMagnifyingGlassLocation /> Cali, Colombia
          </p>
        </div>
        <div data-aos="fade-up" className="izquierda-footer">
          <h3>Titulo</h3>
          <img src={ImgPorta} />
        </div>
      </div>
      <div className="parte2">
        <p>@Copyright - todos los derechos de autor reservados CAGV 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
