import React from 'react';


function Alert(props) {  //props para agregar propiedades 

    return (
        <div className="alert alert-danger alert-dismissible" role="alert">
        <strong>Oops!</strong> Algo fallo, por favor volver a intentar.
        <button 
        type="button" 
        className="btn-close" 
        data-bs-dismiss="alert" 
        aria-label="Close"
        onClick={props.alertSwitch}
        ></button>
    </div> 

    )
}

export default Alert ;
            