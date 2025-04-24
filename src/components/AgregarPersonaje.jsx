import React from 'react'

const AgregarPersonaje = () => {
  return (
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{"background":"rgba(0, 121, 158, 0.7)"}}>
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content border border-warning" style={{"background":"rgba(0,0,0,0.7)"}}>
                <div class="modal-header">
                    <h5 class="modal-title text-white" id="staticBackdropLabel">Añadir Personaje</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Nombre"/>
                                <label for="nombre" className="form-label text-warning">Nombre</label>
                            </div>                            
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Nombre Alterno"/>
                                <label for="nombre_alterno" className="form-label text-warning">Nombre Alterno</label>
                            </div>                            
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Fecha Nacimiento"/>
                                <label for="nacimiento" className="form-label text-warning">Fecha Nacimiento</label>
                            </div>                            
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Procedencia"/>
                                <label for="procedencia" className="form-label text-warning">Procedencia</label>
                            </div>                            
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="Especie"/>
                                <label for="especie" className="form-label text-warning">Especie</label>
                            </div>                            
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder="URL Imagen"/>
                                <label for="img" className="form-label text-warning">URL Imagen</label>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-outline-warning">Añadir</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AgregarPersonaje
