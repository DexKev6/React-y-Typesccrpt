import React from "react";

function Select(){
    return(
        <div className="row">
        <div className="col">
            <label className="visually-hidden" for="specificSizeSelect">Preference</label>
            <select id="tipo" className="form-select">
                <option selected>Tipo de animal</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Pajaro">Pajaro</option>
                <option value="Otro">Otro</option>
            </select>
        </div>
    </div>
    );
}

export default Select;