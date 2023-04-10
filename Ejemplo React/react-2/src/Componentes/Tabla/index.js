import React, { useState } from 'react';
import Encabezado from './Encabezado';
import Fila from './Fila';

function Tabla() {

    const [mascotas, setMascotas] = useState([
        {
            tipo: "Gato",
            nombre: "Manchas",
            dueno: "Esteban",
        },
    ]);

    const columnas = mascotas.length > 0 ? Object.keys(mascotas [0]) : []; //Para tomar las llaves de un objeto
    return (
        <div className="container">
            <table className="table table-hover">
                <Encabezado columnas = {columnas}  />
               
                <tbody id="lista-mascotas">
                    {mascotas.map((mascota, index) => (

                        <Fila mascota={mascota} index={index}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tabla;