import "../../styles/Acerca.css";
import CompAcerca from "./CompAcerca";
import { SiApostrophe } from "react-icons/si";
import { SiApplemusic } from "react-icons/si";
import { SiAzurepipelines } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGhostery } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFreepik } from "react-icons/si";
import { SiNtfy } from "react-icons/si";
import { SiReddit } from "react-icons/si";

const AcercaDeMi = () => {
  return (
    <section id="about-me">
      <div className="acerca-experiencia">
        <h2>Acerca de mi</h2>
        <p>
          En esta sección, quiero hablar un poco sobre mí y mi experiencia en el
          campo de la tecnología. Actualmente, soy estudiante de Tecnología en
          Sistemas en la Universidad Santiago de Cali y del Politécnico Nacional
          de Artes y Oficios "Ponao", donde curso un Técnico Laboral por
          Competencias en Programación de Software. A pesar de estar en una
          etapa inicial de mi carrera, ya he participado en tres proyectos a
          nivel estudiantil, sobre los cuales hablaré en la siguiente sección.
          Me apasiona el mundo de la tecnología y siempre busco aplicar las
          mejores prácticas, esforzándome por ser excelente en lo que hago y por
          encontrar soluciones efectivas a los problemas. Soy curioso por
          naturaleza, lo que me lleva a investigar y preguntar en distintos
          foros de programación como Stack Overflow, discord, grupos de
          Facebook, así como a aprender de la comunidad de programadores y la
          documentación disponible. Nunca me quedo con dudas. Siempre intento ir
          más allá, manteniéndome al día con las últimas tendencias tecnológicas
          y buscando continuamente formas de mejorar en lo que hago.
        </p>
      </div>
      <div className="icons">
        <CompAcerca Icon={SiApostrophe} NameIcon="Video Games" />
        <CompAcerca Icon={SiApplemusic} NameIcon="Music" />
        <CompAcerca Icon={SiAzurepipelines} NameIcon="Despege" />
        <CompAcerca Icon={SiGit} NameIcon="Git" />
        <CompAcerca Icon={SiGhostery} NameIcon="Ghostery" />
        <CompAcerca Icon={SiGithub} NameIcon="GitHub" />
        <CompAcerca Icon={SiFreepik} NameIcon="FreePik" />
        <CompAcerca Icon={SiNtfy} NameIcon="PowerShell" />
        <CompAcerca Icon={SiReddit} NameIcon="Reddit" />
      </div>
    </section>
  );
};

export default AcercaDeMi;
