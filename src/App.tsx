import Menu from "./components/Menu/Menu";
import Principal from "./pages/principal/Principal";
import MouseFollow from './components/MouseF/MouseFollower';
import AcercaDeMi from "./pages/about-me/AcercaDeMi";
import Experiencia from "./pages/experience/Experiencia";
import Tech from "./pages/tech/Tech";
import MisGustos from "./pages/gustos/MisGustos";
import Contacto from "./pages/contact/Contact";
import SocialNet from "./pages/socialNet/BodySocial";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Menu contacto="#formulario" />
      <main>
        <Principal />
        <MouseFollow/>
        <AcercaDeMi />
        <Experiencia />
        <Tech />
        <MisGustos />
        <Contacto />
        <SocialNet />
      </main>
      <Footer />
    </>
  );
}

export default App;
