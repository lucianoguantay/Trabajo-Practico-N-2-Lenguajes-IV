import "./Footer.css";

function Footer() {
  return (
    <footer class="piePagina">
      <p class="mb-1">
        Desarrollado por: <b>LUCIANO EMILIO GUANTAY</b>
      </p>
      <p class="mb-1">Catedra: Lenguajes IV</p>
      <p class="mb1">Profesor Practica: Pacheco Carlos</p>
      <a
        href="https://github.com/lucianoguantay"
        class="text-secondary mx-2 fs-5"
      >
        <i class="bi bi-github"></i>
      </a>
      <a
        href="https://www.instagram.com/lucianoguantay08/"
        class="text-decoration-none text-danger fs-4"
      >
        <i class="bi bi-instagram"></i>
      </a>
    </footer>
  );
}
export default Footer;
