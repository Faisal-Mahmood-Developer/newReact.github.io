import { demodulize } from 'i/lib/methods';
import React, { useEffect, useReducer, useRef, useState } from 'react';
function HOOKS() {
    const [count, setCount] = useState(0);
    const [num, newNum] = useState(0)
    // useEffect(()=>{
    //     alert('This is clicked');
    //     console.log('This is clicked')
    // },[count]);
    return (
        <>
            <div className='container text-center mt-5'>
                <br />
                <h2>Increment and Decrement Counter with React js</h2>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <br />
                <p className='mt-5'>second Counter : {num}</p>
                <button onClick={() => newNum(num - 1)}>Decrement</button>
            </div>
            <br />
            <div className='text-center'>
                <Timer />
                <br />
                <Third />
                <br />
                <Variable />
            </div>

        </>
    )
}

function Timer() {
    const [count1, setCount1] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount1((count1) => count1 + 1);
        }, 1000);
    });

    return <h1>I've rendered {count1} times!</h1>;
}

//   third time practice for useEffect hook 
function Third() {
    const [first, second] = useState(0);
    useEffect(() => {
        setInterval(() => {
            second(() => first + 1);
        }, 1000);
    }, [])
    return (
        <h3>This is third time practice {first}</h3>
    )
}

// the another exaple for useEffect hooks that is dependent on the variable 
function Variable() {
    const [var1, newVar] = useState(0);
    const [var2, newVar2] = useState(0);
    useEffect(() => {
        newVar2(() => var1 * 2);
    }, [var1])
    return (
        <>
            <p>Calculation's: {var1}</p>
            <button onClick={() => newVar((c) => c + 1)}>Add</button>
            <p>second Calculation's: {var2}</p>
            <br />
            <Dependant />
        </>
    )
}

// The last example of useEffect Hooks that is dependant on the other Variable 
function Dependant() {
    const [use, newUse] = useState(0);
    const [use1, newUse1] = useState(0);
    useEffect(() => {
        newUse1(() => use * 2);

    }, [use]);
    return (
        <>
            <p>Fist Calculation: {use}</p>
            <button onClick={() => newUse(use + 1)}>Add</button>
            <p>second Calculation: {use1}</p>
            <br />
            <Use />

        </>
    )
}
// now we start useRef hook 
function Use() {
    const inputRef = useRef();
    const focusInput = () => {
        // inputRef.current.focus();
        // inputRef.current.style.color = 'white';
        // inputRef.current.style.backgroundColor= 'blue';
        // inputRef.current.value = "";
    }
    const myBtn = () => {
        const myinput = document.getElementById('myinput').value;
        document.getElementById('myid').innerHTML += myinput + '<br/>';
        inputRef.current.value = "";

    }
    return (
        <>
            <h2>UseRef in Reactjs</h2>
            <input type='text' ref={inputRef} />
            <br></br>
            <br />
            <button onClick={focusInput}>View</button>
            <br />
            <input type='text' className='mt-3' id='myinput' ref={inputRef}
            placeholder='Enter your name'></input>
            <button onClick={myBtn} className='mt-3'>Add</button>
            <p className='mt-3' id='myid'></p>
            <br/>
< Example />
        </>
    )
}
// another example of useRef hooks 
function Example(){
    const usehook  =  useRef(0);
    function clickBtn(){
        usehook.current = usehook.current + 1;
        alert('You have Clikced ' +  usehook.current  +  ' times');
    }
return(
    <>
    <button onClick={clickBtn}>Add</button>
    <br className='mt-3' />
    <Reducer />
    </>
)
}
// now i start the useReducer hook for the pracitse 
function reducer(state, action) {
    if (action.type === 'incremented_age') {
      return {
        age: state.age + 1
      };
    }
    throw Error('Unknown action.');
  }
  
function Reducer(){
const [state, dispatch] = useReducer(reducer, {age: 0});
    return(
        <>
        <h1>The useReducer Hook in the react js</h1>
        <button className='mt-3' 
        onClick={()=>{
            dispatch({type: 'incremented_age'})
        }}>Increment Age</button>
        <p>Hi, you are {state.age}</p>
        </>
    )
}
export default HOOKS;
