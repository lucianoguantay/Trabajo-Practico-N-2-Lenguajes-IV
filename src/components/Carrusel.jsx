import { useEffect, useState } from "react";
import "./Carrusel.css";

const INTERVALO = 6000; // ms entre slides automáticos

function Carrusel({ items }) {
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [toqueInicial, setToqueInicial] = useState(null);

  const total = items.length;
  const anterior = () => setIndice((i) => (i - 1 + total) % total);
  const siguiente = () => setIndice((i) => (i + 1) % total);

  // Autoplay: se reinicia con cada cambio y se detiene en pausa
  useEffect(() => {
    if (pausado) return;
    const reducirMovimiento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducirMovimiento) return;
    const timer = setTimeout(siguiente, INTERVALO);
    return () => clearTimeout(timer);
  }, [indice, pausado]);

  const manejarTecla = (e) => {
    if (e.key === "ArrowLeft") anterior();
    if (e.key === "ArrowRight") siguiente();
  };

  const alTocar = (e) => setToqueInicial(e.touches[0].clientX);
  const alSoltar = (e) => {
    if (toqueInicial === null) return;
    const diff = e.changedTouches[0].clientX - toqueInicial;
    if (Math.abs(diff) > 50) diff > 0 ? anterior() : siguiente();
    setToqueInicial(null);
  };

  // Distancia circular de cada tarjeta respecto a la activa (…-2, -1, 0, 1, 2…)
  const calcularOffset = (i) => {
    let d = (((i - indice) % total) + total) % total;
    if (d > total / 2) d -= total;
    return d;
  };

  return (
    <section
      className="cf"
      aria-roledescription="carrusel"
      aria-label="Servicios"
      tabIndex={0}
      onKeyDown={manejarTecla}
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
      onTouchStart={alTocar}
      onTouchEnd={alSoltar}
    >
      <button
        className="cf-btn prev"
        onClick={anterior}
        aria-label="Servicio anterior"
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="cf-escenario">
        {items.map((item, i) => {
          const offset = calcularOffset(i);
          const abs = Math.abs(offset);
          const esActivo = offset === 0;
          return (
            <article
              key={item.id}
              className={`cf-card ${esActivo ? "activo" : ""} ${abs > 2 ? "oculto" : ""}`}
              style={{
                "--offset": Math.max(-3, Math.min(3, offset)),
                "--abs": Math.min(3, abs),
              }}
              aria-hidden={!esActivo}
              onClick={() => !esActivo && setIndice(i)}
            >
              <div className="cf-imagen">
                <img src={item.imagen} alt={item.titulo} />
                <span className="cf-badge">
                  Servicio {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="cf-cuerpo">
                <h2>{item.titulo}</h2>
                <p className="cf-desc">{item.descripcion}</p>
                <h3>Tecnologías principales:</h3>
                <ul className="cf-chips">
                  {item.habilidades.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}

        <div className="cf-puntos">
          {items.map((item, i) => (
            <button
              key={item.id}
              className={i === indice ? "activo" : ""}
              onClick={() => setIndice(i)}
              aria-label={`Ir a ${item.titulo}`}
              aria-current={i === indice}
            />
          ))}
        </div>
      </div>

      <button
        className="cf-btn next"
        onClick={siguiente}
        aria-label="Servicio siguiente"
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </section>
  );
}

export default Carrusel;
