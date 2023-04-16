import React from "react";
import "./ModalHeader.css"
function ModalHeader(){
    return(
        <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva mascota</h1>
        <button type="button" 
        className="btn-close" 
        data-bs-dismiss="modal" aria-label="Close"></button>
        <span  aria-hidden="true">&times;</span>
    </div>
    );
}

export default ModalHeader;