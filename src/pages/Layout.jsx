import { useEffect, useState } from "react";
import { INFO } from "../utils/constantes";
import "../styles/layout.css"
export default function Layout({ site, ancho, anchoB }) {
  const [scroll, setScroll] = useState({
    scroll: 0,
    down: true,
  });

  const handlerScrollDown = () => {
    setScroll((prev) => {
      if (
        (prev.down && prev.scroll + 20 != 80) ||
        (!prev.down && prev.scroll - 20 != 0)
      ) {
        return { ...prev, scroll: prev.scroll + (prev.down ? 20 : -20) };
      }
      return { down: !prev.down, scroll: prev.scroll + (prev.down ? 20 : -20) };
    });
  };

  useEffect(() => {
    const list = document.querySelector(".list");
    list.style.transform = `translateY(-${scroll.scroll}%)`;
  }, [scroll]);

  return (
    <>
      <div className="left" >
        <h2 className="title">{INFO[site].title}</h2>
        <img loading="eager" src={INFO[site].imgJ} alt="Imágen de frase japonesa" />
        {site == "mapa" || site == "line-up" &&<p className="description">{INFO[site].description}</p>}
        {site == "mapa" || site == "line-up" ? (
          <div className="listContainer">
            <ol className="list">
              {INFO[site].list.map((li, index) => (
                <li className="listItem" key={li}>
                  <span>{index + 1}</span>-{li}
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div className="listContainer">
            <div className="list">
              {INFO.info.informacion.map((i, index) => (
                <p className="description" key={index}>
                  {i}
                </p>
              ))}
            </div>
          </div>
        )}
        <button
          onClick={() => {
            ancho >= 1024 && handlerScrollDown();
          }}
          className="buttonList"
        >
          {!scroll.down ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={anchoB/4}
              height={anchoB/4}
              fill="#fff"
              className="bi bi-caret-up-fill"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={anchoB/4}
              height={anchoB/4}
              fill="#fff"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          )}
        </button>
      </div>
      <div
        {...(ancho >= 1024
          ? {
              onMouseOver: () => setFilter(true),
              onMouseLeave: () => setFilter(false),
            }
          : {})}
        className="right"
      >
        <img src={INFO[site].imgR} alt={INFO[site].imgRDesc} />
      </div>
    </>
  );
}
