import FreeSecutity from "../../images/free-security.png";
import Starmic from "../../images/starmic.png";
import TeleHealth from "../../images/telehealth.png";
import maqArcade from "../../images/maqArcade.jpg";

const listProject = [
  {
    id: 1,
    name: "FreeSecurity",
    description:
      'Este es un proyecto que realicé durante mi primer semestre en la universidad, donde buscamos solucionar un problema en la facultad de ingeniería. La idea era crear una herramienta que proporcionara las bases de la ciberseguridad a cualquier persona sin conocimientos previos en el tema. Este proyecto, llamado "Free Security", estaba pensado para implementarse a nivel offline.',
    img: FreeSecutity,
    link:'https://freesecurity.netlify.app/'
  },
  {
    id: 2,
    name: "StarMic",
    description: 'Este es el segundo proyecto, llamado "Starmic". Está diseñado para emprendedores que desean hacer crecer sus negocios en internet, pero no saben dónde publicitar sus productos o servicios. Con Starmic, buscamos ofrecer una solución a esta problemática, facilitando la expansión de los emprendimientos en el entorno digital.',
    img: Starmic,
    link:'https://starmic.netlify.app/'
  },
  {
    id: 2,
    name: "TeleHealth",
    description:
      'El objetivo de este proyecto, llamado "Telehealth", es optimizar el tiempo de asignación de citas con diferentes especialidades médicas. La plataforma permite a los pacientes programar consultas médicas en línea o dirigirse al lugar donde se encuentra el médico, e incluso ofrece la posibilidad de que el médico se desplaze al domicilio del paciente.',
    img: TeleHealth,
    link:'https://telehealth2.netlify.app/'
  },
  {
    id: 3,
    name: "PelisFlex",
    description: undefined,
    img: {},
    link:'#'
  },
  {
    id: 4,
    name: "Maquina de Arcade",
    description:
      "Este es el último proyecto. En él, creamos una máquina de arcade utilizando elementos reciclados. Lo único que compramos fueron los controles para poder jugar, ya que usamos emuladores, una PC que iba a ser desechada y madera reutilizada. Este proyecto demuestra cómo se pueden aprovechar materiales disponibles para crear algo divertido y funcional.",
    img: maqArcade,
  },
];

export default listProject;
