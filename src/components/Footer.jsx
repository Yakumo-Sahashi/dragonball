import "../assets/styles/Footer.css";
import esfera from "../assets/img/favicon.png";

const Footer = () => {
  return (
    <div className="container-fluid mt-3 footer">
       <div className="container py-4">
            <div className="row justify-content-around">
                <div className="col-md-5 text-center align-self-center">
                    <h4>Dragon Ball API</h4>
                    <hr className="text-danger"/>
                    <p className="lead">Copyright 2025 | Dragon Ball</p>
                </div>
                <div className="col-md-2 align-self-center">
                    <img className="mx-auto d-block" src={esfera} alt="Esfera" width="50%"/>
                </div>
                <div className="col-md-5 text-center align-self-center">
                    <p className="lead">Aplicaciones Web Front End</p>
                    <span className="lead text-danger">Code by: Diego Bollas</span>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Footer
