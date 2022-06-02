import CardRecursos from "../../components/cardRecursos/cardRecursos";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavAdult from "../../components/navAdultos/NavAdultos";
import Navbar from "../../components/navbar/Navbar";
function RecursoAdult (){
    return(
        <div>
        <Header/>
        <Navbar/>
        <NavAdult/>
        <CardRecursos/>
        <Footer/>
        </div>
        
    );
}
export default RecursoAdult