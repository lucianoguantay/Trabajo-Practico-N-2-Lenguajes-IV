import { useState, useEffect } from "react";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

function Inicio() {
  const [juegos, setJuegos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const URL_BASE = "https://api.rawg.io/api/games";
  const API_KEY = import.meta.env.VITE_API_KEY;

  // Creamos una funcion que obtiene datos de API
  const obtenerJuegos = (url) => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((datos) => setJuegos(datos.results)) //Renderiza de nuevoo
      .catch((error) => console.error("Error al cargar la API:", error));
  };

  // Al cargar la pag por primera vez se ven algunos juegos
  useEffect(() => {
    const urlInicial = `${URL_BASE}?key=${API_KEY}`;
    obtenerJuegos(urlInicial);
  }, []);

  const buscarJuego = (evento) => {
    evento.preventDefault(); // Evita que la página se recargue
    const urlBusqueda = `${URL_BASE}?key=${API_KEY}&search=${busqueda}`;
    obtenerJuegos(urlBusqueda);
  };

  return (
    <>
      <div className="page-transition">
        <PageHeader titulo="Inicio" descripcion="Encuentra tu juego favorito" />
      </div>

      <div className="container mt-4">
        <form
          onSubmit={buscarJuego}
          className="d-flex mb-4 justify-content-center"
        >
          <input
            type="text"
            className="form-control me-3 w-50 pe-2"
            placeholder="Buscar por nombre (Ej: GTA, Mario, FIFA)"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Buscar Juegos
          </button>
        </form>

        <div className="row g-3">
          {juegos.map((dato) => {
            const listaPlataformas = dato.platforms.map(
              (elemento) => elemento.platform.name,
            );

            const generosTexto = dato.genres.map((g) => g.name);
            const descripcionCompleta = `Lanzamiento: ${dato.released}\nRating: ${dato.rating}\nGénero: ${generosTexto}`;

            return (
              <div key={dato.id} className="col-12 col-md-6 col-lg-4">
                <Card
                  titulo={dato.name}
                  descripcion={descripcionCompleta}
                  habilidades={listaPlataformas}
                  imagen={dato.background_image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Inicio;

/*
Codigo sin tarjetas 

<h2> {d.name} </h2>
          <p> Lanzamiento: {d.released} </p>
          <p> Rating: {d.rating} </p>
          <img src={d.background_image} alt={d.name} width="200" />
          <p> Plataformas: </p>
          <ul>
            {d.platforms.map((elemento) => (
              <li key={elemento.platform.id}> {elemento.platform.name} </li>
            ))}
          </ul>*/
