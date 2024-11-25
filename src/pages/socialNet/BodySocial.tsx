import SocialNet, { PropsBody } from "./SocialNet";
import Linkdin from "../../images/linkedin.png";
import Outlook from "../../images/outlook.png";
import Gmail from "../../images/gmail.png";
import Whatsapp from "../../images/whatsapp.png";
import Git from "../../images/GitHub-logo.png";

function BodySocial() {
  return (
    <SocialNet>
      <PropsBody
        img={Linkdin}
        link="https://www.linkedin.com/in/cristian-alexis-garces-valencia-b74575319/"
      />
       <PropsBody
        img={Whatsapp}
        link="https://wa.me/573026471433?text=Hola+Cristian+me+gusto+tu+portafolio+quiero+comunicarme+contigo"
      />
      <PropsBody img={Git} link="https://github.com/CristianAGarces" />
      <PropsBody
        img={Gmail}
        link="https://wa.me/573026471433?text=Hola+Cristian+me+gusto+tu+portafolio+quiero+comunicarme+contigo"
      />
       <PropsBody
        img={Outlook}
        link="mailto:cristyan2030@gmail.com?cc=&bcc=&subject=Mire%20tu%20portafolio%20y%20me%20gusto!!.&body=Cordial%20saludo%20Cristian.%0A%0AEspero%20est%C3%A9s%20bien%2C%20para%20comentarte%20que%20estuve%20mirando%20tu%20portafolio%20y%20quiero%20hablar%20un%20poco%20mas%20contigo%20para%20una%20posible%20vacante%20que%20esta%20disponible%20para%20ti%2C%20CLARAMENTE%20despu%C3%A9s%20de%20que%20pases%20la%20prueba%20t%C3%A9cnica!!.%F0%9F%98%81%0A%0AGracias%20por%20tu%20atenci%C3%B3n.%0AAtentamente%3A%0A"
      />
    </SocialNet>
  );
}

export default BodySocial;
