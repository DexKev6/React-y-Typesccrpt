import React from 'react';

function Modal() {
    return (

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva mascota</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <form id="form">
                            <input type="hidden" id="indice" />
                            <div className="row">
                                <div className="col">
                                    <label className="visually-hidden" for="specificSizeSelect">Preference</label>
                                    <select id="tipo" className="form-select">
                                        <option selected>Tipo de animal</option>
                                        <option value="Perro">Perro</option>
                                        <option value="Gato">Gato</option>
                                        <option value="Pajaro">Pajaro</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                            </div>
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