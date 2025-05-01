import Header from "./components/Header";
import Galeria from "./pages/Galeria";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Tickets from "./pages/Tickets";
import Error from "./components/Error";
import BarraTexto from "./components/BarraTexto";
import { useNavigate } from "./hooks/useNavigate";
import { useMemo, useState } from "react";
export default function App() {
  const { handleClickenlaces, logo, site } = useNavigate();
  const ancho = useMemo(() => window.innerWidth, []);
  const anchoB = useMemo(() => window.innerWidth / 15, []);
  const [appear, setAppear] = useState(false);
  return (
    <>
      <Header
        appear={appear}
        setAppear={setAppear}
        handleClickenlaces={handleClickenlaces}
        logo={logo}
      />
      {ancho < 1024 && (
        <div
          style={{ backgroundColor: appear && "#cc2656" }}
          className="headerM"
        >
          <img src="/LOGO/Logo Sakura Blanco.png" alt="Logo del Festival" />
          <button onClick={() => setAppear(true)} id="menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={anchoB}
              height={anchoB}
              fill="#fff"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      )}
      <main className={site}>
        {(() => {
          switch (site) {
            case "home":
              return <Home />;
            case "line-up":
            case "info":
            case "mapa":
              return <Layout ancho={ancho} anchoB={anchoB} site={site} />;
            case "galeria":
              return <Galeria />;
            case "tickets":
              return <Tickets />;
            default:
              return <Error />;
          }
        })()}
      </main>
      {site == "home" && <BarraTexto />}
    </>
  );
}
