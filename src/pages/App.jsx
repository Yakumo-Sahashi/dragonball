import "../assets/styles/Main.css";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Inicio from "./Inicio.jsx";
import Personajes from "./Personajes.jsx";
import Arcos from "./Arcos.jsx";
import Temas from "./Temas.jsx";
import Login from "./Login.jsx";
import Registro from "./Registro.jsx";
import Error from "./Error.jsx";
const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/personajes" element={<Personajes/>}/>
                <Route path="/arcos" element={<Arcos/>}/>
                <Route path="/temas" element={<Temas/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter> 
    );
}
export default App;