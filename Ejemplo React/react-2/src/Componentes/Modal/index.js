import React from 'react';
import ModalHeader from './ModalHeader';
import Select from '../Select';
import "./Modal.css"

const tiposMascotas = [
                                            
                                               
    {valor: "Perro",etiqueta: "Perro"},
    {valor: "Gato",etiqueta: "Gato"},
    {valor: "Pajaro",etiqueta: "Pajaro"},
    {valor: "Otro",etiqueta: "Otro"},
 
]


function Modal() {
    return (
        <>
            <div className="modal" >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <ModalHeader />
                        <div className="modal-body">

                            <form id="form">
                                <div className="row">
                                    <div className="col">
                                        <Select options={tiposMascotas} nombreCampo="Tipo animal" />
                                    </div>
                                </div>
                                        <input type="text"
                                            id="nombre"
                                            name="nombre"
                                            className="form-control"
                                            placeholder="Nombre"

                                        />


                                    <div className="col">
                                        <input type="text"
                                            id="dueno"
                                            name="dueno"
                                            className="form-control"
                                            placeholder="Dueño"

                                        />
                                    </div>

                            </form>

                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                id="btn-guardar">Crear</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal-backdrop fade show'></div>
        </>
    );
}

export default Modal;