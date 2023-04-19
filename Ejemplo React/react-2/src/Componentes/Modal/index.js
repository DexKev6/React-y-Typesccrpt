import React from 'react';
import ModalHeader from './ModalHeader';
import Select from '../Select';
import "./Modal.css"
import Input from '../Input';
import ModalFooter from './ModalFooter';

const tiposMascotas = [


    { valor: "Perro", etiqueta: "Perro" },
    { valor: "Gato", etiqueta: "Gato" },
    { valor: "Pajaro", etiqueta: "Pajaro" },
    { valor: "Otro", etiqueta: "Otro" },

]


function Modal({cambiarModal = () => {}}) {
    return (
        <>
            <div className="modal" >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <ModalHeader cambiarModal = {cambiarModal}/>
                        <div className="modal-body">

                            <form id="form">
                                <div className="row">
                                    <div className="col">
                                        <Select options={tiposMascotas} nombreCampo="Tipo animal" />
                                    </div>
                                </div>
                                <Input tipo="text" nombreCampo="nombre" />
                                <Input tipo="text" nombreCampo="dueno" />


                            </form>

                        </div>
                        <ModalFooter cambiarModal= {cambiarModal}/>
                    </div>
                </div>
            </div>
            <div className='modal-backdrop fade show'></div>
        </>
    );
}

export default Modal;