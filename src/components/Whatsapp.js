import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../assets/mehan-logo1.png";

export default function Whatsapp() {
  return (
    <div>
      <FloatingWhatsApp
        avatar={logo}
        phoneNumber="0096891766077"
        accountName="Mehan"
        chatMessage={`Hello,`}
      />
    </div>
  );
}
