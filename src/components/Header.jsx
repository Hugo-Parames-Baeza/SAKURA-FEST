export default function Header({ handleClickenlaces, logo, appear, setAppear }) {
  return (
    <header style={{top:appear?"0%":"", left:appear?"0%":""}}>
        <img
          src={logo}
          alt="Logo del festival que contiene una botella y palabras japonesas"
          data-href="home"
          onClick={(e)=>{
            setAppear(false); handleClickenlaces(e)
          }}
        />
      <nav>
        <div className="linksContainer">
          <div className="linkContainer">
            <a className="link" onClick={(e)=>{
              setAppear(false); handleClickenlaces(e)
            }} href="/line-up">
              LINE UP
            </a>
          </div>
          <div className="linkContainer">
            <a className="link" onClick={(e)=>{
              setAppear(false); handleClickenlaces(e)
            }} href="/mapa">
              MAPA
            </a>
          </div>
          <div className="linkContainer">
            <a className="link" onClick={(e)=>{
              setAppear(false); handleClickenlaces(e)
            }} href="/galeria">
              GALERÍA
            </a>
          </div>
          <div className="linkContainer">
            <a className="link" onClick={(e)=>{
              setAppear(false); handleClickenlaces(e)
            }} href="/info">
              INFO
            </a>
          </div>
        </div>
        <div className="tikectLinkContainer">
          <div className="linkContainer">
            <a className="link" onClick={(e)=>{
              setAppear(false); handleClickenlaces(e)
            }} href="/tickets">
              TICKETS
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
