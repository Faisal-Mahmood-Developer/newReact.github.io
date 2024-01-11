import React, { useState } from "react";
import '../../src/index.css'

function Alert(props){

    const [text, newText] = useState({
        display: 'none'
    })
     const pop=()=>{
        newText({
            display: 'block'
        })
    }
    return(

        <>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong class="text-center">{props.msg}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div className="myPopup" id="myPop" >
       
    </div>
    <br></br>
<button type="button" onClick={pop}>See</button>
        </>
    );
}

export default Alert;