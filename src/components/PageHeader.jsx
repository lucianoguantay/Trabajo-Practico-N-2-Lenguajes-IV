import "./PageHeader.css";

function PageHeader({ titulo, descripcion }) {
  if (titulo !== "Error 404") {
    return (
      <div className="box-header">
        <h1 className="titulo-header"> Bienvenido a la pagina de {titulo} </h1>
        <p className="parrafo-header"> Breve descripcion de la misma: {descripcion} </p>
      </div>
    );
  } else {
    return (
      <div className="box-header">
        <h1 className="titulo-header"> {titulo} </h1>
        <p className="parrafo-header"> {descripcion} </p>
      </div>
    );
  }
}
export default PageHeader;
