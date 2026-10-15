import PageHeader from "../components/PageHeader";
import FormularioCont from "../components/FormularioCont";
import "./Contacto.css";
function Contacto() {
  return (
    <>
      <div className="page-transition">
        <PageHeader
          titulo="Contacto"
          descripcion="Rellena el formulario para entrar en contacto con nosotros"
        />
        <FormularioCont />
        <div className="mapa">
          <div className="mapa__info">
            <i className="bi bi-geo-alt-fill"></i>
            <div>
              <h2>Universidad Católica de Salta</h2>
              <p>Campus Castañares, Salta</p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.567498518268!2d-65.396292724852!3d-24.74172437800692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc14f9aaaaaab%3A0x69dac60239564277!2sUniversidad%20Cat%C3%B3lica%20de%20Salta!5e0!3m2!1ses!2sar!4v1792077522245!5m2!1ses!2sar"
            width="100%"
            className="mapa__iframe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de la Universidad Católica de Salta"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contacto;
