import React, { Component } from "react";
import Nav from "./Componentes/Nav";
import ActionsMenu from "./Componentes/ActionsMenu";
import Tabla from "./Componentes/Tabla";
import Modal from "./Componentes/Modal";

class Pagina extends Component { //Clases al estilo Java 

    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
        };
    }

cambiarModal = () => {
    this.setState({mostrarModal: !this.state.mostrarModal})
}
    //Codigo del componente

    //el método reder siempre debe ir de ultimas 


    render() {
        return (
            <>
                <div className="container">
                    <Nav />

                    <ActionsMenu cambiarModal={this.cambiarModal}/>

                    <Tabla />
                    {this.state.mostrarModal && <Modal />}

                </div >
            </>
        );
    }


}

export default Pagina;
