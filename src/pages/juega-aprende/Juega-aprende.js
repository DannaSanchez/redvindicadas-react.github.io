import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import banner from "./adult-banner.svg"
import "./juega-aprende.css"

function Juega (){
    return(
        <div>
        <Header />
        <Navbar />
        <article class="banner">
        <img src={banner} alt=""/>
        </article>
        <Footer/>
        </div>
    );
}
export default Juega