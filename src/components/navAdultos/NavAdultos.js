import "./NavAdultos.css"
import book from "../../pages/juega-aprende/img/book.svg"
import linea from "../../pages/adultos/img/adul-linea.svg"
import play from "../../pages/juega-aprende/img/juego.svg"
function NavAdult(){
    return(
        <div className="container-barnav">
            <div className="container-titlebar">
                <h1 className="h1-barra">Recursos de Padres y Adultos</h1>
            </div>
            <div className="barnav-recursosyjuegos">
                    <div className="barnav-interna">
                        <img className="img-menu" src={book} alt=""/>
                        <a className="button-adult" href="recursos-adultos.html">Recursos</a>
                    </div>
                <img className="imglinea-nav" src={linea} alt=""/>
                    <div className="barnav-interna">
                            <img className="img-menu" src={play} alt=""/>
                            <a className="desactive" href="juegos-adultos.html">Juegos</a>
                    </div>
            </div>
        </div>
    );
}
export default NavAdult