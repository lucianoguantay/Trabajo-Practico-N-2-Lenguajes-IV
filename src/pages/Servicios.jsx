import PageHeader from "../components/PageHeader";
import Carrusel from "../components/Carrusel";
import { habilidadesInfo } from "../data/habilidades";
import Card from "../components/Card";

function Servicios() {
  return (
    <>
      <div className="page-transition">
        <PageHeader
          titulo="Servicios"
          descripcion="En este apartado encontraras informacion acerca de todos nuestros servicios"
        />
      </div>
      <Carrusel items={habilidadesInfo} />
      <div className="container">
        <div className="row g-3">
          {habilidadesInfo.map((elemento) => (
            <div key={elemento.id} className="col-12 col-md-6 col-lg-4">
              <Card
                titulo={elemento.titulo}
                descripcion={elemento.descripcion}
                habilidades={elemento.habilidades}
                imagen={elemento.imagen}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Servicios;
