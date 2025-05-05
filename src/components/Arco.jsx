import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faPenToSquare,faTrashCan, faToriiGate, faChartBar, faChartDiagram, faListOl} from "@fortawesome/free-solid-svg-icons";
import { faSuperpowers} from "@fortawesome/free-brands-svg-icons";

const Arco = ({id,saga,descripcion,episodios,antagonistas,img}) => {
    return (
        <div className='card card-black'>
            <div className="card-body">
                <div className="row">
                    <div className="col-4 col-md-5">
                        <div className='card-img-p py-0' style={{"backgroundImage":`url(${img})`}}></div>
                    </div>
                    <div className="col-8 col-md-7">
                        <h3 className='text-white mt-1'><FontAwesomeIcon icon={faToriiGate} className="me-2 text-warning" /><b>Arco {saga}</b></h3>
                        <hr className="text-danger"/>

                        <span className="badge bg-danger fs-6"><FontAwesomeIcon icon={faChartBar} className="me-2" />Descripcion:</span>
                        <p className='lead'>{descripcion}</p>

                        <p className='lead'><FontAwesomeIcon icon={faListOl} className="me-2" />Episodios: <span className="badge bg-warning">{episodios}</span></p>

                        <p className='lead'><FontAwesomeIcon icon={faChartDiagram} className="me-2" />Antagonistas: {antagonistas.map( antagonista => <span className="badge bg-primary me-1"><FontAwesomeIcon icon={faSuperpowers} className='me-2'/>{antagonista}</span>)}</p>

                        <div className="text-end">
                            <button type="button" className="btn btn-outline-primary mx-1 btn-sm rounded-circle" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                            <FontAwesomeIcon icon={faPenToSquare}/>
                            </button>
                            <button className='btn btn-outline-danger mx-1 btn-sm rounded-circle'><FontAwesomeIcon icon={faTrashCan}/></button>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Arco
