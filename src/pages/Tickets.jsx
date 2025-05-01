import Counter from "../components/Counter";
import "../styles/tickets.css"

export default function Tickets() {
  return (
    <>
      <p className="titulo">ENTRADAS DISPONIBLES EN:</p>
      <Counter />
      <button disabled>COMPRAR</button>
    </>
  );
}
