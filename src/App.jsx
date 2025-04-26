import Header from "./components/Header";
import LineUp from "./pages/LineUp";
import Galeria from "./pages/Galeria";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Mapa from "./pages/Mapa";
import Tickets from "./pages/Tickets";
import Error from "./components/Error";
import BarraTexto from "./components/BarraTexto";
import { useNavigate } from "./hooks/useNavigate";
export default function App() {
  const { handleClickenlaces, logo, site } = useNavigate();
  return (
    <>
      <Header handleClickenlaces={handleClickenlaces} logo={logo} />
      <main className={site}>
        {(() => {
          switch (site) {
            case "home":
              return <Home />;
            case "line-up":
              return <LineUp />;
            case "galeria":
              return <Galeria />;
            case "info":
              return <Info />;
            case "mapa":
              return <Mapa />;
            case "tickets":
              return <Tickets />;
            default:
              return <Error />;
          }
        })()}
      </main>
      {site == "home" &&(<BarraTexto/>)}
    </>
  );
}
