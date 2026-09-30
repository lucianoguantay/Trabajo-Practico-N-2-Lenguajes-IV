import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./FormularioCont.css";

const MAX_MENSAJE = 300;

function FormularioCont() {
  const form = useRef();
  const [formData, setFormData] = useState({
    nombreApellido: "",
    email: "",
    mensaje: "",
  });
  const [errores, setErrores] = useState({});
  const [estadoForm, setEstadoForm] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrores((prev) => ({ ...prev, [name]: "" }));
  };

  // Funcion Validar
  const validar = () => {
    const nuevosErrores = {};
    let hayError = false;

    const validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (formData.nombreApellido.trim() === "") {
      nuevosErrores.nombreApellido = "El nombre y apellido son obligatorios.";
      hayError = true;
    }

    if (formData.email.trim() === "") {
      nuevosErrores.email = "El correo electrónico es obligatorio.";
      hayError = true;
    } else if (!validarEmail.test(formData.email.trim())) {
      nuevosErrores.email = "Ingresá un correo válido (ej: nombre@gmail.com).";
      hayError = true;
    }

    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio.";
      hayError = true;
    } else if (formData.mensaje.length > 300) {
      nuevosErrores.mensaje = `El mensaje no puede superar los 300 caracteres.`;
      hayError = true;
    }

    setErrores(nuevosErrores);
    return !hayError;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setEstadoForm(null);

    if (!validar()) return;

    setEstadoForm("enviando");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          //Si el formulario se envio entonces reinicia loscampos
          setEstadoForm("exito");
          setFormData({ nombreApellido: "", email: "", mensaje: "" });
          setErrores({});
        },
        (error) => {
          console.error("Error EmailJS completo:", error);
          setEstadoForm("error");
        },
      );
  };

  return (
    <div className="contenedor">
      <h2 className="form-title text-center mb-4">FORMULARIO DE CONTACTO</h2>

      {estadoForm === "exito" && (
        <div className="alert alert-success" role="alert">
          El mensaje ha sido enviado con exito
        </div>
      )}
      {estadoForm === "error" && (
        <div className="alert alert-danger" role="alert">
          No se pudo enviar el mensaje.
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} noValidate>
        <div className="mb-3">
          <label className="form-label">Nombre y Apellido *</label>
          <input
            type="text"
            className={`form-control ${errores.nombreApellido ? "is-invalid" : ""}`}
            id="nombreApellido"
            name="nombreApellido"
            placeholder="Ej: Juan Pérez"
            value={formData.nombreApellido}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errores.nombreApellido}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email *</label>
          <input
            type="email"
            className={`form-control ${errores.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            placeholder="Ingresar Email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errores.email}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Mensaje *</label>
          <textarea
            className={`form-control ${errores.mensaje ? "is-invalid" : ""}`}
            id="mensaje"
            name="mensaje"
            rows="5"
            placeholder="Escribí tu mensaje..."
            value={formData.mensaje}
            onChange={handleChange}
          />
          <div className="form-text text-end">
            {formData.mensaje.length}/{MAX_MENSAJE}
          </div>
          <div className="invalid-feedback">{errores.mensaje}</div>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={estadoForm === "enviando"}
        >
          {estadoForm === "enviando" ? "ENVIANDO..." : "ENVIAR"}
        </button>
      </form>
    </div>
  );
}

export default FormularioCont;
