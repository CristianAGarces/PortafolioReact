import FreeSecutity from "../../images/free-security.png";
import Starmic from "../../images/starmic.png";
import TeleHealth from "../../images/telehealth.png";
import maqArcade from "../../images/maqArcade.jpg";
import Artiefy from "../../images/Artiefy.png";

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
    name: "Maquina de Arcade",
    description:
      "Este es el último proyecto. En él, creamos una máquina de arcade utilizando elementos reciclados. Lo único que compramos fueron los controles para poder jugar, ya que usamos emuladores, una PC que iba a ser desechada y madera reutilizada. Este proyecto demuestra cómo se pueden aprovechar materiales disponibles para crear algo divertido y funcional.",
    img: maqArcade,
  },{
    id:4,
    name:"Fundapmacoe",
    description:
      "Este es un proyecto de la Fundación fundapmacoe, donde trabajamos en la implementacion de un sistema para la gestion de madres cabeza de hogar de todo tipos de etnia blanca, india o mestiza que no hayan podido estudiar o quieran nuevas alternativas de vida para tener trabajos dignos de calidad o tener espacios sociales para compartir con otras madres cabezas de hogar en cursos o simplemente brindarles ayuda juridica si tienen problemas intrafamiliares.",
    img: Artiefy,
    link:'https://fundapmacoe.org/'
  },{
    id:5,
    name:"Artiefy Inc.",
    description:
    "Plataforma de LMS digital buscando mejorar el acceso a la educación a todas las personas sin restricciones de edad, estrato social, etnia o país.",
    img: Artiefy,
    link:'https://artiefy.com/'
  }
];

export default listProject;
