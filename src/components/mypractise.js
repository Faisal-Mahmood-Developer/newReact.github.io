import React from "react";
import { useState, useEffect, useRef, useReducer } from "react";

function Myfunction() {
    // const [text, myText] = useState('');
    // const count = useRef(0);
    // useEffect(() => {
    //     count.current = count.current + 1
    // });


    const [texttt, myTexttt] = useState('');
    const newState = useRef(0)
    useEffect(() => {
        newState.myname = newState.current + 1;
    });



    return (
        <>
            <div className="text-center ">
                <h1>Faisal Mahmood</h1>
                <h1>React Hooks</h1>
                <p>Now we learn and practise react hooks in this file</p>
                <br></br>
                {/* <input type="text" onChange= {(e) => myText(e.target.value)}
                    value={text} />
                <h3>Render count {count.current}</h3> */}

                <br></br>

                <h3>The other example for useref</h3>
                <br />
                <input type="text" onChange={(f) => myTexttt(f.target.value)} value={texttt} />
                <br />
                <h1>Render the other count: {newState.current}</h1>
                <Myheader />
            </div>
        </>
    )
}
const Myheader = () => {
    const [state, myState] = useState('');
    const previousValue = useRef("");

    useEffect(() => {
        previousValue.current = state;
    }, [state])
    return (
        <>
            <h4>The useRef state is used for tracking the previous value in React</h4>
            <input type="text" onChange={(e) => myState(e.target.value)} placeholder="Enter your value" value={state} />
            <h4>Current Value {state}</h4>
            <h4>previous Value {previousValue.current}</h4>
            <br />
            <FocusInput />
        </>
    )
}


function FocusInput() {
    const [oldText, newText] = useState('');
    const inputElement = useRef();
    const change_Color = () => {
        inputElement.current.style.backgroundColor = 'red';
    }
    return (
        <>
            <input value={oldText} type="text" ref={inputElement} onChange={(e) => newText(e.target.value)} />
            <button onClick={change_Color}>Focus Input</button>
            <Myreducer />
        </>
    );
}



const initialState = 10;
const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === 'Faisal Mahmood') {
        return state + 1;
    }
    if (action.type === 'Decrement') {
        return state - 1;
    }
    return state;
}
function Myreducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    // const action = {
    //     type: 'Faisal Mahmood'
    // }
    return (
        <>
            <h2>Now I start the Reducer Hook</h2>
            <br />
            <p>{state}</p>
            <br />
            <button type="button" onClick={() => dispatch({ type: 'Faisal Mahmood' })}>Increment</button>
            <button type="button" className="mx-1" onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
       <MyFunction />
        </>
    )
}
let myinitialState = 0;
const reducer1 =(state, action)=>{
//console.log(state, action)
if(action.type === 'Faisal Mahmood'){
    return state + 1;
}

if(action.type === 'Faisal'){
    return state - 1;
}
}
function MyFunction(){
    const [state, dispatch] = useReducer(reducer1, myinitialState)
    const action = {
      type: 'Faisal'
    }
    return(
        <>
        <h2>The reducerHook another example</h2>
        <br />
        <p>{state}</p>
        <button className="btn btn-danger me-2"
        type="button"
        onClick={()=> dispatch({type: 'Faisal Mahmood'})}>+</button>
       <button className="btn btn-primary" onClick={()=> dispatch(action)}>-</button>
       <Myreducer />
<br/>
<br/>
<br/>
<br/>
        </>
    )
}


//inital State
// const newinitialState = {
//     counter: 0
// }

// function reducer(state, action) {
//     let newState;
//     switch (action.type) {
//       case 'increase':
//         newState = { counter: state.counter + 1 };
//         break;
//       case 'decrease':
//         newState = { counter: state.counter - 1 };
//         break;
//       default:
//         throw new Error();
//     }
//     return newState;
//   }
// function Myreducer(){
//     const [state11, dispatch] = useReducer(reducer2, newinitialState);
//     const action = {
//         type: 'ActionType',
//     }
    
//     return(
//         <button onClick={()=>dispatch(action)}>Click me</button>
//     )
// }













export default Myfunction;
