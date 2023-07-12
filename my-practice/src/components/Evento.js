import PropTypes from "prop-types";

function Evento({ numero }) {
  function meuEvento() {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }

  return (
    <>
      <p>Clique para disparar um evento</p>
      <button onClick={meuEvento}>Ativar!</button>
    </>
  );
}

Evento.propTypes = {
  numero: PropTypes.number.isRequired,
};

export default Evento;
