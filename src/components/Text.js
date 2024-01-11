import React, { useState } from 'react';
import '../index.css'

export default function TextForm(props){

   
//convert to upper case
function myFunction(){
    let result = text.toUpperCase();
    myText(result)
}

//text convert to lowercase
function myLowercase(){
    let result = text.toLowerCase();
    myText(result)
}

function my_Function(event){
    // console.log('Text is changed')
    myText(event.target.value)
}

// clear text button
function clearText(){
    myText("")
}
 //Change color text button

const btnFunction = ()=>{
    newStyle({
        color: 'white',
        backgroundColor:'black'
    })
}
// function for the style change 
const buttonFunction = ()=>{
    newStyle({
        color: 'black',
        backgroundColor:'white'
    })
}

// function for copy text 
  const copyFunction = ()=>{
  const myText = document.getElementById('copytext');
  myText.select();
  navigator.clipboard.writeText(myText.value)
  }
//handle the extra space 
const handleSpace = ()=>{
    let mySpace = text.split(/[ ]+/);
    myText(mySpace.join(" "));
}


const [text, myText] = useState('');
const [cssStyle, newStyle] = useState();

    return (

        <>
        <div className='container'>
    <br></br>
    <h1 className='mt-5'>{props.heading}</h1>
    <div className='mt-4' >
    <textarea style={cssStyle}  type='text'  className='form-control'  rows='8' id='copytext'  value= {text} onChange={my_Function} placeholder='Enter your Text'></textarea>
    </div> 
    <br></br>
    <button className= {`btn btn-${props.myBtn} ms-2`} onClick={myFunction}>Convert to UpperCase</button>
    {/* for the lower case  */}

    <button className= {`btn btn-${props.myBtn} ms-2`} onClick={myLowercase} >Convert to lowerCase</button>
    {/* button for clear text  */}
    <button className= {`btn btn-${props.myBtn} ms-2`} onClick={clearText} >Clear Text</button>
    {/* button for change color of text  */}
    <button className={`btn btn-${props.myBtn} ms-2`} onClick={btnFunction} >Dark mode</button>
    <button className={`btn btn-${props.myBtn} ms-2`} onClick={buttonFunction} >Enable Dark mode</button>
    <button className= {`btn btn-${props.myBtn} ms-2`} onClick={copyFunction} >Copy Text</button>
    <button className={`btn btn-${props.myBtn} ms-2`} onClick={handleSpace} >Remove Extra Space</button>
    


</div>

<br></br>
  <div className='container'>
  <h1>Your text Summary</h1>
  <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b>  characters</p>
  <p><b>{0.008 * text.split(" ").length}</b> Mints is required for Reading</p>
      </div>
      <div className='container'>

      <h2>Perview</h2>
      <p className='mt-3' style={cssStyle}>{text}</p>
      </div>
        </>
    )

}
