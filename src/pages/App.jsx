import "../assets/styles/Main.css";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Personajes from "./Personajes.jsx";
import Arcos from "./Arcos.jsx";
import Temas from "./Temas.jsx";
import Login from "./Login.jsx";
import Registro from "./Registro.jsx";
import Error from "./Error.jsx";
import RutasPrivadas from "../routes/RutasPrivadas.jsx";
import RutasPublicas from "../routes/RutasPublicas.jsx";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect} from "react";
import {useLoader} from "../hooks/useLoader.jsx";
import Loader from "../components/Loader.jsx";
import Fondo from "../components/Fondo.jsx";
import Imagenes from "./Imagenes.jsx";

const App = () => {
    const {iniciarCarga,detenerCarga} = useLoader();
    useEffect(() => {
        iniciarCarga();
        AOS.init({
            duration: 1000,
            once: true, 
        });
        if (document.readyState === 'complete') {
            detenerCarga();
        } else {
            window.addEventListener('load', detenerCarga);
        }
        return () => window.removeEventListener('load', detenerCarga);
    }, []);
    return (
        <BrowserRouter>
            <Loader/>
            <Fondo>
                <Routes>
                    <Route path="/" element={<RutasPrivadas><Inicio/></RutasPrivadas>}/>
                    <Route path="/inicio" element={<RutasPrivadas><Inicio/></RutasPrivadas>}/>
                    <Route path="/personajes" element={<RutasPrivadas><Personajes/></RutasPrivadas>}/>
                    <Route path="/arcos" element={<RutasPrivadas><Arcos/></RutasPrivadas>}/>
                    <Route path="/temas" element={<RutasPrivadas><Temas/></RutasPrivadas>}/>
                    <Route path="/login" element={<RutasPublicas><Login/></RutasPublicas>}/>
                    <Route path="/registro" element={<RutasPublicas><Registro/></RutasPublicas>}/>
                    <Route path="/imagenes" element={<RutasPrivadas><Imagenes/></RutasPrivadas>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </Fondo>
        </BrowserRouter> 
    );
}
export default App;