import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './whatsapp.css';
const WhatsAppButton = () => {
  const phoneNumber = '9145415691'; // Replace with your phone number

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick} className='whatsapp-button'>
      <FontAwesomeIcon icon={faWhatsapp} />
    </button>
  );
};

export default WhatsAppButton;
