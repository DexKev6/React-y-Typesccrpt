import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';


  const INITIAL_STATE =  [ 
     {
       nick: 'dapelu',
       subMonths: 3,
       avatar: 'https://i.pravatar.cc/150?u=dapelu',  //un servicio para imagenes de avatars
       description: 'dapelu do moder'
     },
     {
       nick: 'sergio_serrano',
       subMonths: 3,
       avatar: 'https://i.pravatar.cc/150?u=sergio-serrano'
     }
   ]


//forma pro
interface Sub{
  nick: string,
  subMonths: number,
  avatar: string,
  description?: string //Opcional
}


function App() {


  const [subs, setSubs] = useState  <Array<Sub>>([]) //forma pro

//Primera renderizacion

useEffect(()=>{
  setSubs(INITIAL_STATE)
},[])


  //const [subs, setSubs] = useState  ([ Forma manual

    //una forma manual de hacerlo
  //   {
  //     nick: 'dapelu',
  //     subMonths: 3,
  //     avatar: 'https://i.pravatar.cc/150?u=dapelu',  //un servicio para imagenes de avatars
  //     description: 'dapelu do moder'
  //   },
  //   {
  //     nick: 'sergio_serrano',
  //     subMonths: 3,
  //     avatar: 'https://i.pravatar.cc/150?u=sergio-serrano'
  //   }
  // ])



  return (
    <div className="App">

    <h1>Dex sub</h1>
    <ul>
      {
        subs.map(subs => {
          return(
            <li key={subs.nick}>
              <img src={subs.avatar} alt={`Avatar for ${subs.nick}`}  />
              <h4>{subs.nick} (<small>{subs.subMonths}</small>)</h4>
              <p>{subs.description?.substring(0,100)}</p>
            </li>
          )
        })
      }
    </ul>

    </div>
  );
}

export default App;
