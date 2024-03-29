//CRUD
const API_URL = 'https://backend-ashen-ten.vercel.app';

export const listarEntidad = async ({ entidad = 'mascotas' }) => {
    try {
        const respuesta = await fetch(`${API_URL}/${entidad}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log({ error })
    }
};

  
export const crearEditarEntidad = async ({
     entidad = 'mascotas',
   objeto = {}, 
      method= "POST" ,
      idObjeto = null,
    }) => {
    try {
            let url =null;
            if(method === "PUT" && idObjeto){
                url +=  `${API_URL}/${entidad}/${idObjeto}`
            }else if (method === "POST"){
                url = `${API_URL}/${entidad}`
            }
            if(!url){ //forma de decir que no hay
                throw new Error ("No cumple criterios")
            }
        const respuesta = await fetch(`${API_URL}/${entidad}`, {
            method,
            headers:{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(objeto),
            mode: "cors",
        });
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log({ error })
    }
};

  