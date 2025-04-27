import React from "react";
import Counter from "../components/Counter";

export default function Tickets() {
  return (
    <>
      <p>ENTRADAS DISPONIBLES EN:</p>
      <Counter />
      <button disabled>COMPRAR</button>
    </>
  );
}
