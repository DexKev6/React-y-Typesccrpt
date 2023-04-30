import React, { Component } from "react";
import Nav from "./Componentes/Nav";
import ActionsMenu from "./Componentes/ActionsMenu";
import Tabla from "./Componentes/Tabla";
import Modal from "./Componentes/Modal";
import { listarEntidad, crearEditarEntidad } from "./Servicio"

class Pagina extends Component { //Clases al estilo Java 

    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
            entidades: [],
            objeto: {},
        };
    }

    cambiarModal = () => {
        this.setState({ mostrarModal: !this.state.mostrarModal })
    }
    listar = async () => {
        const { entidad } = this.props;
        const entidades = await listarEntidad({ entidad });
        this.setState({ entidades })
    };

    manejarInput = (evento) => {
        const {
            target: { value, name },
        } = evento;
        let { objeto } = this.state;
        console.log({ value, name, evento })

        objeto = { ...objeto, [name]: value }
        this.setState({ objeto })
    };

    crearEntidad = async () => {
        const {entidad} = this.props;
        let {objeto} = this.state;
        const method = 'POST'
        await crearEditarEntidad({entidad, objeto, method});
        this.cambiarModal()
        this.listar();

    }

    componentDidMount() {
        this.listar();
    };

    // componentWillMount() {
    //     debugger;
    // }

    // componentWillReceiveProps() {
    //     debugger;
    // }

    // shouldComponentUpdate() {
    //     debugger;
    // }
    // componentWillUpdate() {
    //     debugger;
    // }
    // componentWillUnmount() {

    //  }




    //Codigo del componente

    //el método reder siempre debe ir de ultimas 


    render() {
        const { titulo = "Pagina sin titulo" } = this.props;
        return (
            <>
                <div className="container">
                    <Nav />

                    <ActionsMenu

                        cambiarModal={this.cambiarModal} titulo={titulo} />

                    <Tabla entidades={this.state.entidades}
                    />

                    {this.state.mostrarModal &&
                        <Modal
                            cambiarModal={this.cambiarModal}
                        />
                    }



                    <Modal
                        cambiarModal={this.cambiarModal}
                        manejarInput={this.manejarInput}
                        crearEntidad={this.crearEntidad}
                    />
                </div >
            </>
        );
    }


}

export default Pagina;
