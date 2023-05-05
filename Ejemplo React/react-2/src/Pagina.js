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
            idObjeto: null,
            method: "POST",
        };
    }

    cambiarModal = () => {
        this.setState({ mostrarModal: !this.state.mostrarModal})
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
        const { entidad } = this.props;
        let { objeto, method } = this.state;
        
        await crearEditarEntidad({ entidad, objeto, method });
        this.cambiarModal()
        this.listar();

    }

    editarEntidad =  (_evento, index) => {   //  _hace que sea opcional usarlo

        const objeto = {...this.state.entidades[index]};
        this.setState({objeto,idObjeto:index}, ()=>{
            this.mostrarModal(null, "PUT")
        })
        

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

                    <ActionsMenu  cambiarModal={this.cambiarModal} titulo={titulo} />

                    <Tabla 
                    entidades={this.state.entidades}   
                    editarEntidad = {this.editarEntidad} 
                     />
                    {this.state.mostrarModal && (
                        <Modal
                            cambiarModal={this.cambiarModal}
                            manejarInput={this.manejarInput}
                            crearEntidad={this.crearEntidad}
                            objeto = {this.state.objeto}
                        />
                    )}
                </div >
            </>
        );
    }


}

export default Pagina;
