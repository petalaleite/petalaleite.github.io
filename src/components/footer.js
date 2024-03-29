function Footer() {
  const D = new Date();
  let year = D.getFullYear();
  return (
    <footer>Pétala Leite @ {year}</footer>
  );

}

export default Footer;