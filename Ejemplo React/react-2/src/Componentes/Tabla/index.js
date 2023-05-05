import React from 'react';
import Encabezado from './Encabezado';
import Fila from './Fila';

function Tabla({entidades = [], editarEntidad = () => {}}) {

 const columnas = entidades.length > 0 ? Object.keys(entidades [0]) : []; //Para tomar las llaves de un objeto
    return (
  
            <table className="table table-hover">
                <Encabezado columnas = {columnas}  />
               
                <tbody id="lista-mascotas">
                    {entidades.map((entidad, index) => (

                        <Fila 
                        key={`fila-${index}`} 
                        index={index} 
                        entidad={entidad}
                        ditarEntidad={editarEntidad}
                        />
                    ))}
                </tbody>
            </table>
     
    );
}

export default Tabla;