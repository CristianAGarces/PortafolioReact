import { ReactNode } from "react";
import "../../styles/social.css";

type Props = {
  children: ReactNode;
};

function SocialNet({ children }: Props) {
  return (
    <section id="social">
      <h2>Redes sociales</h2>
      <div className="img-asideSocialNet">{children}</div>
      <a
        className="descarga"
        href="public\download\CV Tech Cristian ATS.pdf"
        download
      >
        Da click para descargar mi cv
      </a>
    </section>
  );
}

type propsElementBody = {
  img: string;
  link: string;
};

export function PropsBody({ img, link }: propsElementBody) {
  return (
    <div className="social-links">
      <a className="links-social" href={link}>
        <img src={img} />
      </a>
    </div>
  );
}

export default SocialNet;
