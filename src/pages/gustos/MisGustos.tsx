import videojuegos from '../../images/videojuegos.jpg';
import gym from '../../images/gym.jpg';
import anime from '../../images/anime.jpg';
import familia from '../../images/familia.jpg';
import redesSociales from '../../images/redes-sociales.jpg';
import '../../styles/gustos.css';

const MisGustos = () => {
  return (
    <section id="gustos">
      <h2>Mis gustos y/o Hobbies</h2>
      <p>
        En esta sección, quiero compartir algunos de mis hobbies y lo que
        disfruto hacer en mi tiempo libre cuando no estoy programando o
        aprendiendo sobre tecnología. Aunque dedico gran parte de mi día a
        aprender y practicar para mejorar mis habilidades, también me tomo el
        tiempo para descansar y disfrutar de otras actividades. Entre mis
        pasatiempos favoritos se encuentran ver anime, ir al gimnasio (cuando
        puedo), utilizar las redes sociales, pasar tiempo con mi familia y, por
        supuesto, jugar videojuegos &#128513;!!.
      </p>
      <div className="img-gustos">
        <img className="img-misgustos" src={videojuegos} />
        <img className="img-misgustos" src={gym} />
        <img className="img-misgustos" src={anime} />
        <img className="img-misgustos" src={familia} />
        <img className="img-misgustos" src={redesSociales} />
      </div>
    </section>
  );
};

export default MisGustos;
