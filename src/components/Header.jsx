export default function Header({ handleClickenlaces, logo }) {
  return (
    <header>
        <img
          src={logo}
          alt="Logo del festival que contiene una botella y palabras japonesas"
          data-href="home"
          onClick={handleClickenlaces}
        />
      <nav>
        <div className="linksContainer">
          <div className="linkContainer">
            <a className="link" onClick={handleClickenlaces} href="/line-up">
              LINE UP
            </a>
          </div>
          <div className="linkContainer">
            <a className="link" onClick={handleClickenlaces} href="/mapa">
              MAPA
            </a>
          </div>
          <div className="linkContainer">
            <a className="link" onClick={handleClickenlaces} href="/galeria">
              GALERÍA
            </a>
          </div>
          <div className="linkContainer">
            <a className="link" onClick={handleClickenlaces} href="/info">
              INFO
            </a>
          </div>
        </div>
        <div className="tikectLinkContainer">
          <div className="linkContainer">
            <a className="link" onClick={handleClickenlaces} href="/tickets">
              TICKETS
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
