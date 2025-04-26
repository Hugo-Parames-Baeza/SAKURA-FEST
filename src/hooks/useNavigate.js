import { useEffect, useState } from "react";
// import { SITES } from "../utils/constantes";
export const useNavigate = () => {
  const [site, setSite] = useState("home");
  const [logo, setLogo] = useState("/LOGO/Logo Sakura Blanco.png");

  const handleClickenlaces = (e) => {
    e.preventDefault();
    const posicion = e.target.dataset.href || e.target.href.lastIndexOf("/") + 1 ;
    setSite(e.target.localName=="img"?posicion:e.target.href.slice(posicion));
  };

  useEffect(() => {
    history.pushState({}, "", site);
    if(site!="error"){
      setLogo(site=="home"?"/LOGO/Logo Sakura Blanco.png":"/LOGO/Logo Sakura Rosa.png")
    }
    document.querySelector("body").id=site!="home"?"w":"";
  }, [site]);

  return { site, logo, handleClickenlaces };
};
