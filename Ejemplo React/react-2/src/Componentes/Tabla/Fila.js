import React from "react";
import BotonAccion from "../BotonAccion";

function Fila({entidad, index}) {
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{entidad.tipo}</td>
            <td>{entidad.nombre}</td>
            <td>{entidad.dueno}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                 
                   <BotonAccion tipo = "editar"/>
                   <BotonAccion tipo = "eliminar"/>
                   
                </div>
            </td>
        </tr>


    )
}
export default Fila;