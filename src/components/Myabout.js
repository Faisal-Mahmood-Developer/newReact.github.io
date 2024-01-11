import React, { useState, useContext } from "react";
import MyHeader from "./practise";

function About() {
  const [myStyle, setStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    padding: '10px',
    border: '1px solid white'



  })



  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setStyle({
        color: 'black',
        backgroundColor: 'white',
        textAlign: 'center',
        padding: '10px',

      })
    }
  }




  // second button 
  const btn1 = () => {
    if (myStyle.color === 'black') {
      setStyle({
        color: 'white',
        backgroundColor: 'black',
        textAlign: 'center',
        padding: '10px',
        border: '1px solid white'


      })
    }
  }

  return (
    <>
    <br></br>
  
    <div className='container mt-5' style={myStyle}>
      <h1 className="">About us </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div classNameName="container">

      </div>
      <br></br>
      <button class="btn btn-danger mb-5" onClick={toggleStyle}>Enable dark mode</button>

      <button class="btn btn-primary mb-5 ms-3" onClick={btn1}>Dark mode</button>
      <br></br>
    </div>
<br></br>
<div className="text-center">
     < MyHeader />

</div>
</>



  )
}



export default About;