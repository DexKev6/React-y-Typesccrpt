import { Sub } from '../types';

//con esa impotacoin se puede hacer la interfaz mas pequeña 
/**interface Props { //esta es la version larga
    subs: Array<{
        nick: string, //las comas pueden sobrar
        subMonths: number,
        avatar: string,
        description?: string
    }>
} */

interface Props {
    subs: Array<Sub>
}


export default function List ({subs}: Props){
    
   // export default function List (props: Props){
     //   const {subs} = props      otra forma de hacerlo


   return(
    
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
   ) 
}

/*
otras formas de hacer lo de arriba no muy recomentables

const List = ({subs}: Props) => {  //hacer arrow funtion raro jode el children  
    return()
}
export default Lis

y en app.tsx hay que hacer otras cosas

//otra forma
const List = ({subs}: Props) => {  //hacer arrow funtion raro jode el children  
    const renderlist = () => { //recomenda renderizar  
        return subs.map(sub=>{
            y aqui pone la list
        })
    }
    return()
}
export default Lis


*/ 