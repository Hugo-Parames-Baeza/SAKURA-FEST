import React from "react";
import Counter from "../components/Counter";
export default function Home() {
  return (
    <>
      <div className="homeTextContainer">
        <img
          id="PhrasePageHome"
          src="/OTROS/Frase japones Pagina 1.png"
          alt="Frase Japonesa"
        />
        <p className="home_paragraph">"No hay primavera sin Sakura"</p>
        <Counter/>
      </div>
      <div className="beerContainer">
        <img
          id="beer"
          src="/OTROS/Jarra Cerveza.png"
          alt="Jarra de cerveza fría"
        />
      </div>
    </>
  );
}
