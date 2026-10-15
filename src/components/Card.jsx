import "./Card.css";

function Card({ titulo, descripcion, habilidades, imagen }) {
  return (
    <div className="servicio-card card h-100">
      <div className="servicio-card__img-wrapper">
        <img src={imagen} className="servicio-card__img" alt={titulo} />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="servicio-card__titulo">{titulo}</h5>
        <p className="servicio-card__desc" title={descripcion}>
          {descripcion}
        </p>

        <div className="servicio-card__tags mt-auto">
          {habilidades.map((elemento, index) => (
            <span key={index} className="servicio-card__tag">
              {elemento}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
