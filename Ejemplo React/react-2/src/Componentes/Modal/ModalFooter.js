import React from "react";
import "./ModalFooter.css"

function ModalFooter(
    { cambiarModal } = () => { },
    { crearEntidad } = () => { }
    
    ) {
    return (
        <div className="modal-footer">

            <button
                onClick={cambiarModal}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
            >Cerrar
            </button>
            <button
                onClick= {
                    crearEntidad
               
                }
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                id="btn-guardar"
            >Crear</button>
        </div>
    )
}

export default ModalFooter