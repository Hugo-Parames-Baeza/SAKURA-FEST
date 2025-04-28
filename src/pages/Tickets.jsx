import React from "react";
import Counter from "../components/Counter";

export default function Tickets() {
  return (
    <>
      <p className="titulo">ENTRADAS DISPONIBLES EN:</p>
      <Counter />
      <button disabled>COMPRAR</button>
    </>
  );
}
