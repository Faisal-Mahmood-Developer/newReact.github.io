import  {useState, createContext, useContext} from "react";
import React from 'react'
import '../../src/style.css'

// function MyHeader(props){


//     const otherFunction = ()=>{
//         console.log('my name is Faisal Mahmood')
//         let myArr = 'faisal';
//         if(prompt(myArr.match())){
//             document.getElementById('myDemo').innerHTML = 'Faisal Mahmood'
//         }else{
//             alert('Invalid password')

//         }
//     }

//     const myFunction= (a)=>{
// alert(a)



// }
// javaScript if statement in the react  js 
// function FirstFunction(){
//     return <h1>Missed</h1>   
//    }
//    function SecondFunction(){
//     return <h1>Goal</h1>
//    }



//  function Goal(props){
//     const myGoal = props.isGoal;
//     if(myGoal){
//         return <FirstFunction />
//     }
//         return <SecondFunction />
//  }

// function MissedGoal() {
// 	return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
// 	return <h1>GOAL!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>;d
// function Car(){
// const car = ['Ford', 'city', 'Honda'];

// }



// <>
// <h1>{props.myName}</h1>
// <button className="btn btn-primary" onClick={otherFunction}>Add</button>
// <p id="myDemo"></p>

// {/* to pass the arguments to an event handler use an arrow function  */}
// <button className="btn btn-primary"onClick={()=> myFunction('My name is Faisal Mahmood')}>Button</button>
// <br></br>
// {/*React list for practise */}

// <Goal myGoal={false}/>
// </>


// function Car12(props){
//     return <li>I am a {props.brand}</li>
// }

// function MyHeader(){
//     const cars = ['Ford', 'City', 'Honda']
//     return (
//         <>
//         <h1>Who lives in Lahore</h1>
//         <ul>
//             {cars.map((car => <Car12 brand={car}/>))}
//         </ul>
//         </>
//     )
// }
//second time practise for map functioin
// function Carsss(props){
//     return (
//         <>
//      <li>I am a {props.myBrand}</li>   


//         </>
//     )
// }

// function MyHeader(){
//     const myCars = ['Faisal', 'Mahmood', 'Lodhran'];
//     return(
//         <>
//         <h1>What is your name?</h1>
//     <ul>
//         {myCars.map((newCar=> <Carsss myBrand = {newCar} />))}
//         <li>Submit</li>   
//     </ul>
//         </>
//     )
// }
//third time practise for map function
// function Header(props){
//     return <i>I live in {props.brand}</i>
// }
// function  MyHeader(){
// const myArray = [
//     {id: 1, brand: 'lahore'},
//     {id: 2, brand: 'Lodhran'},
//     {id: 3, brand: 'Islamabad'},
//     {id: 4, brand: 'Dunyapur'},

// ]
//     return (
//       <uL>
//         {myArray.map(newArr => <Header key={newArr.id} brand={newArr.brand}/>)}
//       </uL>
//     )
// }

//  function MyHeader(props){
//     const myFunction = ()=>{
// const text = document.getElementById('myText').value;
// document.getElementById('myName').innerHTML = text;
//     }

//     return(
//         <>
//         <h1>React Forms</h1>
//         <h1>{props.myName}</h1>
//         <from>
//             <label>
//                 Enter your name:
//             </label>
//             <br></br>
//             <input type="text" id="myText" placeholder="Enter your name"/>
//             <br></br>
//             <button type="button" onClick={myFunction}>Add</button>
//             <br></br>
//             <p id="myName"></p>
//         </from>
//         </>
//     )

//  }
// next example for the forms \
// function MyHeader(){
//     const [name, setName] = useState("");


//     return(
//         <>
//         Name:
//     <br></br>
//     <input type="text" value={name} onChange={(e) => e.target.value}/>
//         </>
//     )
// }


// submitting the form in react
// function MyHeader(){
//     const [text, newText] = useState('');


//     return (
//         <>
//         <form >
//             <label>
//                 Enter your name
//             </label>
//             <br></br>
//             <input type="text" placeholder="Enter the text here"  />
//         </form>
//         </>
//     )
// }


// other function for submitting the form 
// function MyHeader(){
//     const [text, myText] = useState('zxczx');

//     const handleForm = (event)=>{
// event.preventDefault();
// alert(`The name of you was entered ${text}`)
//     }
//     return(
//         <>
//         <form onSubmit={handleForm}> 
//             <label>Enter your name</label>
//             <br></br>
//             <input 
//           type="text" 
//           value={text}
//           onChange={(e) => myText(e.target.value)}
//         />
//             <br></br>
//             <input type="submit" />
//             <br></br>
//             <h1 id="myName"></h1>
//         </form>
//         </>
//     )
// }

// Text area in the react js 
// function MyHeader(){

//     const handleFunction  = (e)=>{
//         myName(e.target.value);
//     }
//     const [name, myName]  = useState('');
//     return(
//         <>
//         <textarea value={name} onChange={handleFunction }/>
//         <br></br>

//         </>
//     )
// }

// The option tag in React.js 
// function MyHeader(){
//     const [name, newName]  =  useState('Fiat')

//     const handleChange = (e)=>{
//         newName(e.target.value)
//     }

//     return (
//         <>
//          <form>
//       <select value={name} onChange={handleChange} style={{backgroundColor: 'black', color: 'white'}}>
//         <option value=''>Ford</option>
//         <option >Volvo</option>
//         <option >Fiat</option>
//       </select>
//     </form>
//         </>
//     )
// }

// css in the react js
// What is hooks in the react js
// function MyHeader() {
//     // const myStyle = {
//     //     backgroundColor: 'black',
//     //     color:'white',
//     //     padding: '30px',
//     //     justifyContent: 'center'

//     const [color, myColor] = useState('red')
//     return (
//         <>
//             <div className="myDiv">
//                 <h1>Faisal Mahmood</h1>
//             </div>
//             <h2>My Favourite color is {color}</h2>
//             <button type="button" onClick={() => myColor('Blue')}>Blue</button>
//             <button type="button" onClick={() => myColor('Orange')}>Orange</button>
//             <button type="button" onClick={() => myColor('Red')}>Red</button>
//             <button type="button" onClick={() => myColor('Black')}>Black</button>
//             <button type="button" onClick={() => myColor('Green')}>Green</button>
//             <button type="button" onClick={() => myColor('Pink')}>pink</button>
//             <br></br>
//         </>


//     )

// }


// function MyHeader(){
//     const [car, mycar] = useState('Fortuner');
//     const [color, myColor]  = useState('Red');
//     const [model, newModel] = useState('2023')
//     return(
//         <>
//         <h1>My car name is {car} and color is {color} and my car modal is {model}</h1>
//         </>
//     )
// }

//Create a single hook that hold an object in the react .js
// function MyHeader(){
//     const [hook, myHook] = useState({
//         brand: 'Pakistan',
//         color: 'black',
//         model: '2030',
//         name: 'Honda City'
//     })
//     return(
//         <>
//         <h>My Car name is {hook.name}</h>
//         <br></br>
// <h2>My Car brand is {hook.brand}, color of car is {hook.color} and Car model is {hook.model}</h2>
//         </>
//     )
// }

// function MyHeader(){
//     const [state, myState] = useState(0);
//     useEffect(()=>{
     
//             setTimeout(()=>{
//                 myState((state)=> state +1)
//             },1000)
        
       
//     })
//     return(
//         // <button type="button" onClick={()=> {myState(state +1)}}>Add {state}</button>
//         <h1>Number is running {state}</h1>
//     )
// }

// function MyHeader(){
//     const [name, myName] = useState(0);
//     const [valyee, myValuee] = useState(0);
//     return(
//         <>
//         <p>Count:{name}</p>
//         <button type="button" onClick={()=> myName((c)=> c+1)}>+</button>
//         </>
//     )
// }
// now we use contextHook in the react js
// const UserContext = createContext();

// function MyHeader(){
//     const [user, setUser]  = useState('Faisal Mahmood');
 
//     return (
//         <UserContext.Provider value={user}>
//           <h1>{`Hello ${user}!`}</h1>
//           <Component2 />
//         </UserContext.Provider>
//       );
//     }

// function Component2(){
//     return(
//         <>
//         <h1>This is component2</h1>
//         <Component3 />
//         </>
//     )
// }
// function Component3(){
//     return(
//         <>
//         <h1>
//         This is a component three
//     </h1>
//     <Component4 />
//         </>
//     )
    
// };
// // this is component four 
// function Component4(){
//     return(
//         <>
//         <h1>This is component four</h1>
//         <Component5 />
//         </>
//     )
// }
// // now this is compnent five 
// function Component5(){
//     return(
//         <>
//         <h1>This is component five</h1>
//         <ComponentSix />
//         </>
//     )
// }
// // now this is a component is six

// function ComponentSix(){
//     const user = useContext(UserContext);
//     return(
//         <>
//         <h1>This is Component Six</h1>
//         <h2>{`My name is ${user}`}</h2>
//         </>
//     )
// }


function MyHeader(){

    const myFunction = ()=>{
    const myInput = document.getElementById('myText');
    myInput.select();
    navigator.clipboard.writeText(myInput.value)
    }
    return (
        <>
        <textarea id="myText" placeholder="Enter  your Message" />
        <br>
        </br>
        <button onClick={myFunction} className="btn btn-primary">Copy text</button>
        </>
    )
}

export default MyHeader;