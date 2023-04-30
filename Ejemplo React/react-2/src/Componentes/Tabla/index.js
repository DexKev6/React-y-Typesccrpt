import React, { useState } from 'react';
import Encabezado from './Encabezado';
import Fila from './Fila';

function Tabla({entidades = []}) {



    const columnas = entidades.length > 0 ? Object.keys(entidades [0]) : []; //Para tomar las llaves de un objeto
    return (
        <div className="container">
            <table className="table table-hover">
                <Encabezado columnas = {columnas}  />
               
                <tbody id="lista-mascotas">
                    {entidades.map((entidad, index) => (

                        <Fila entidad={entidad} index={index}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tabla;