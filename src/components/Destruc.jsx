function Destruc({ titulo, descripcion, habilidades, imagen }) {
  return (
    <>
      <h1> {titulo} </h1>
      <p> {descripcion} </p>
      <p> {habilidades} </p>
      <img src={imagen} />
    </>
  );
}

export default Destruc;
