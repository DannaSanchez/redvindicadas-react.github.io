import down from "../../pages/adultos/img/descargaderecha.svg"
import "./cardRecursos.css"
function CardRecursos(){
    return(
        <div classNameName="card-border-src">
            <div className="card-src">
                <h3>La ciudadanía sexual: un aporte al disfrute - IDEP</h3>
                <p>Documento pdf</p>
                <a href="https://revistas.idep.edu.co/index.php/mau/article/download/1741/1711#:~:text=Luis%20Miguel%20Berm%C3%BAdez%3A%20la%20ciudadan%C3%ADa,hab%C3%ADa%20sido%20excluida%20por%20tab%C3%BA"  rel="noreferrer" target="_blank"><img class="icondescarga-derecha" src={down} alt=""/></a>
            </div>
        </div>
);
}
export default CardRecursos