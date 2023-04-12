import React, {Component} from "react";
import Nav from "./Componentes/Nav";
import ActionsMenu from "./Componentes/ActionsMenu";
import Tabla from "./Componentes/Tabla";
import Modal from "./Componentes/Modal";

class Pagina extends Component  { //Clases al estilo Java 

render(){
    return (
        <>
            <div className="container">
                <Nav />

                <ActionsMenu />

                <Tabla/>
                <Modal/>

            </div >
        </>
    );
}
    

}

export default Mascotas;
