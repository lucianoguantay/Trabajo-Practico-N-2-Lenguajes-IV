import "./Footer.css";

function Footer() {
  return (
    <footer className="piePagina">
      <p className="mb-1">
        Desarrollado por: <b>LUCIANO EMILIO GUANTAY</b>
      </p>
      <p className="mb-1">Catedra: Lenguajes IV</p>
      <p className="mb1">Profesor Practica: Pacheco Carlos</p>
      <a
        href="https://github.com/lucianoguantay"
        className="text-secondary mx-2 fs-5"
      >
        <i className="bi bi-github"></i>
      </a>
      <a
        href="https://www.instagram.com/luciano_guantay_/"
        className="text-decoration-none text-danger fs-4"
      >
        <i className="bi bi-instagram"></i>
      </a>
    </footer>
  );
}
export default Footer;
