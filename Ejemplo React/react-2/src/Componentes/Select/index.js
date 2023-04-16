import React from "react";
import "./Select.css"

function Select({ options = [], nombreCampo = "vacio" }) {
    return (


        <select id="tipo" className="form-select">
            <option value="">Seleccione {nombreCampo}</option>
            {options.map(({ valor, etiqueta }, index) => (
                <option key={`${nombreCampo}-${index}-${valor}`}
                    value={valor}>
                    {etiqueta}</option>
            ))}
        </select>

    );
}

export default Select;