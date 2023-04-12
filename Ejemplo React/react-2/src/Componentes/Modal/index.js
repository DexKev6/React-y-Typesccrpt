import React from 'react';
import ModalHeader from './ModalHeader';
import Select from '../Select';

function Modal() {
    return (

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <ModalHeader />
                    <div className="modal-body">

                        <form id="form">
                            <input type="hidden" id="indice" />
                           <Select/>
                            <div className="row">
                                <div className="col">
                                    <input type="text" id="nombre" name="nombre" className="form-control"
                                        placeholder="Nombre" aria-label="First name"></input>
                                </div>
                                <div className="col">
                                    <input type="text" id="dueno" name="dueno" className="form-control" placeholder="Dueño"
                                        aria-label="Last name"></input>
                                </div>

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
    );
}

export default Modal;