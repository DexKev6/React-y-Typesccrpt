import React from "react";
import Nav from "./Componentes/Nav";
import ActionsMenu from "./Componentes/ActionsMenu";
import Tabla from "./Componentes/Tabla";
import Modal from "./Componentes/Modal";
function Mascotas() {


    return (
        <>
            <div className="container">

                {/* aqui iba el nav */}
                <Nav />

                {/* ActionsMenu */}

                <ActionsMenu />

                <Tabla/>
                <Modal/>

            </div >
        </>
    );

}

export default Mascotas;
