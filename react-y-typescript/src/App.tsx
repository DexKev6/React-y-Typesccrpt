import React, { useEffect, useRef, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { Sub } from './types'; //las estenciones punto lo que se no va (.d)





//Recomendacion de separar el estado del componente 
//Hacerlo como interfaz y poner todos los estados que puede tener tu componente
interface AppState{
  subs:   Array<Sub>  //Sub[] Otra forma
  newSubsNumber: number
}


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


function App() {


  //Con interface
  
  const [subs, setSubs] = useState  <AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  const divRef = useRef<HTMLDivElement>(null)
  //Sin interface
  //const [subs, setSubs] = useState  <Array<Sub>>([]) //forma pro
  //const [subs, setSubs] = useState  <Sub[]> //Otra forma de definirlo


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

const handleNewSub = (newSub: Sub): void => {
  setSubs(subs => [...subs, newSub])
}

  return (
    <div className="App" ref={divRef}>

      <h1>Dex sub</h1>
    <List subs={subs}/>
    <Form onNewSub={handleNewSub}/>


    {/* Lo paso a un componente para mayor organizacion
     
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
    </ul> */}

    </div>
  );
}

export default App;
