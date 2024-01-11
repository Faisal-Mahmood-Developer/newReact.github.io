import React, { useState } from "react";
import '../../src/index.css'

function Projects() {
    const [listTodo, setList] = useState([]);
    let addList = (inputText) => {
        setList([...listTodo, inputText]);
    }
    return (
        <>

            <div className="container mt-5">
                <h1 className="text-center bg-dark text-white p-5">To do list with react js</h1>
                <br />
            </div>
            <Todolist addList={addList} />
        </>
    )
};

function Todolist(props) {
    const [inputText, setInput] = useState('');
    const floatRightStyle = {
        float: 'right',
      };

    return (
        <>
            <div className="container">
                <input className="form-control plaintText"
                    placeholder="Enter your todo"
                    type="text"
                    value={inputText}
                    onChange={e => {
                        setInput(e.target.value)
                    }} />
                <button onClick={() => {
                    props.addList(inputText)
                    setInput("")
                }}>+</button>
                <br></br>
                <p className="text-center"></p>
                <li>
                    <input type="text" placeholder="Enter text here"
                    /><span><i class="fa-solid fa-trash-can"></i></span>
                </li>


                <li className="list-group-item p-5">
               
                    <i class="fa fa-remove" style={floatRightStyle}></i>
               
            </li>

            </div>
        </>
    )
}
export default Projects;