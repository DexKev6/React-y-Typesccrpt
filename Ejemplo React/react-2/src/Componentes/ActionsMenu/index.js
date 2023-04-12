import React, {useState} from 'react';
import Alert from "../Alert";

function ActionsMenu() {

    const [MostrarAlerta, setMostrarAlerta] = useState(false);
    const alertSwitch = ()=>setMostrarAlerta(!MostrarAlerta);
    return (
        <div className="actions-menu">
            <h1>Mascotas</h1>
            <div className="actions-menu-content">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                    onClick={alertSwitch }
                    
                    >Nuevo</button>

                    {MostrarAlerta && <Alert alertSwitch={alertSwitch}/>}
                  
                   
                
            </div>
        </div>
    );
}

export default ActionsMenu;