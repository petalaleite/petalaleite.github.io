import React from 'react';
import './footer.css';

function Footer() {
  const D = new Date();
  let year = D.getFullYear();
  return (
    <footer className="text-center footer_">
      Pétala Leite @ {year}
    </footer>
  );

}

export default Footer;