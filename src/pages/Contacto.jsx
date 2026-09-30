import PageHeader from "../components/PageHeader";
import FormularioCont from "../components/FormularioCont";
function Contacto() {
  return (
    <>
      <div className="page-transition">
        <PageHeader
          titulo="Contacto"
          descripcion="Rellena el formulario para entrar en contacto con nosotros"
        />
        <FormularioCont />
      </div>
    </>
  );
}

export default Contacto;
