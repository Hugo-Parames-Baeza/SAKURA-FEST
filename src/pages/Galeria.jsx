import { useMemo, useState } from "react";
import { GALERIA } from "../utils/constantes";
import "../styles/galeria.css";

export default function Galeria() {
  const [selected, setSelected] = useState(null);
  const galeriaImágenes = useMemo(
    () =>
      GALERIA.map((i, index) => (
        <img
          onClick={() => setSelected({ src: i[0], alt: i[1] })}
          className={index == GALERIA.length - 1 ? "cell last" : "cell"}
          src={i[0]}
          alt={i[1]}
          key={index}
        />
      )),
    []
  );
  const rows = Math.ceil(galeriaImágenes.length / 3);
  console.log(rows);
  return (
    <>
      <div className="left">
        <h2 className="title">GALERÍA</h2>
        <img
          src="/OTROS/Frase japones Pagina x.png"
          alt="Imágen de frase japonesa"
        />
      </div>
      <div
        style={{ gridTemplateRows: `repeat(${rows},1fr)` }}
        className="imagesContainer"
      >
        {galeriaImágenes}
        {Boolean(selected) && (
          <div className="pop">
            <button onClick={() => setSelected(null)}>X</button>
            <img src={selected.src} alt={selected.alt} />
          </div>
        )}
      </div>
    </>
  );
}
