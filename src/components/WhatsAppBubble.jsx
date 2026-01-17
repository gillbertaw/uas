import React from "react";
import "../styles/whatsapp.css";
import whatsappIcon from '../assets/images/General/WhatsAppIcon.png';

const WhatsAppBubble = () => {
  const phoneNumber = "6281234567890";
  const message = "Hello, I need help with my trip";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppBubble;
