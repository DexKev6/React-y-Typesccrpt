
//import { type } from 'os';
//import {useReducer, useState} from 'react';

import { Sub } from '../types';
import useNewAubForm from './hooks/useNewSubForm';



//con esa impotacoin se puede hacer la interfaz mas pequeña 
/**
interface FormState {
    nick: string,
    subMonths: number,
    avatar: string,
    description?: string //Opcional
}    
*/
// interface FormState { se movio a hooks
//    inputValues:Sub
// }

interface FormProps{
    onNewSub:  (newSub: Sub) => void
    //React.Dispatch<React.SetStateAction<Sub[]>>
}

// const INITIAL_STATE = { SE MOVIO A HOOKS
//     nick: '',
//     subMonths: 0,
//     avatar: '',
//     description: ''
// }

// type FormReducerAction = { se movio a hooks
//     type: "change_value",
//     payload: {
//         inputName: string,
//         inputValue: string
//     }
// } | {
//     type: "clear"
// }

// const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
//     switch (action.type){
//         case "change_value":
//             const {inputName, inputValue} = action.payload
//             return{
//                 ...state,
//                 [inputName]: inputValue
//             }
//         case "clear":
//             return INITIAL_STATE
//             /**default:
//              * return state//no es necesrio
//              */
        
//     }
// }


const Form = ({onNewSub}: FormProps) => {

    // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(
    //     INITIAL_STATE

    //     // nick: '', //sustituir pot INITIAL_STAte
    //     // subMonths: 0,
    //     // avatar: '',
    //     // description: ''
    // )

    const [inputValues, dispatch] = useNewAubForm()

    const handleSumit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onNewSub(inputValues)
        //onNewSub(subs => ([...subs,inputValues]))
        handleClear()
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {  
        
        const   {name, value} = event.target

        dispatch({
            type: 'change_value',
            payload: {
                inputName: name,
                inputValue: value
            }
        })
        
        // setInputValues({ //ya no impotya
        //     ...inputValues,
        //     [event.target.name]: event.target.value

        // })
        
    
    }

    const handleClear = () =>{

        dispatch({type: "clear"})
        // setInputValues (INITIAL_STATE)
           // { se remplazo por Initial state
        // nick: '',
        // subMonths: 0,
        // avatar: '',
        // description: ''})
    }
/*//para lograr saber lo de React.ChangeEvent<HTMLInputElement
dentro del form se pondria:

    <input onChange={event => {  
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value

        })
    }} value={inputValues.nick} type="text"  name="nick" placeholder="nick"/>
*/ 
    return(
        <div>
            <form onSubmit={handleSumit}>
                <input onChange={handleChange} value={inputValues.nick} type="text"  name="nick" placeholder="nick"/>
                <input onChange={handleChange} value={inputValues.subMonths} type="number"  name="subMonth" placeholder="subMonth"/>
                <input onChange={handleChange} value={inputValues.avatar} type="text"  name="avatar" placeholder="avatar"/>
                <textarea onChange={handleChange} value={inputValues.description}   name="description" placeholder="description"/>
                ,<button onClick={handleClear} type='button'>Clear the form</button>
                <button type='submit'>save new sub!</button>
            </form>
        </div>
    )
}

export default Form