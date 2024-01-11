 import './App.css'
 import Navbar from './components/Navbar';
 import TextForm from './components/Text';
 import React, {useState} from 'react';
 import MyHeader  from './components/practise';
 import About from './components/Myabout';
 import Header from './myApp'
 import Alert from './components/MyAlert';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cache from './components/Cache';
import Footer from './components/footer';
import HOOKS from './components/hook';
import Projects from './components/todolist'

 function App() {
   const [mode,  newMode] = useState('light');
   const [alert,  myAlert] = useState('');
   const [text,  myText] = useState(''); 
   const [firstbtn,  secondBtn] = useState(''); 
   const [myFooter,  newFooter] = useState(''); 
   const [chekboxone,  check_boxone] = useState(''); 

  //  const showAlert =(types, msg)=>{
        
  //  }

   const toggleMode = ()=>{
     if(mode === 'light'){
       newMode('dark')
       document.body.style.backgroundColor = 'black'
       document.body.style.color = 'white'
       myAlert('Dark Mode')
       myText('Enable Dark Mode')
       secondBtn('primary')
       document.title = 'Dark Mode';
       newFooter('danger')
      }else{
        newMode('light')
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        myAlert('Dark Mode is enabled');
        myText('Make Dark Mode')
        secondBtn('danger')
       document.title = 'Light Mode';
       newFooter('dark')
     }
    }

    const myFirt_chekbox =()=>{
      if(chekboxone === 'light'){
        check_boxone('dark')
        document.body.style.backgroundColor = 'green'
        document.body.style.color = 'white'
        secondBtn('secondary')
        newFooter('danger')
       }else{
        check_boxone('light')
         document.body.style.backgroundColor = 'white'
         document.body.style.color = 'black'
         secondBtn('danger')
        newFooter('dark');
 
      }
    }
  
return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar mode = {mode}   toggleMode={toggleMode} myValue = {text}  myBox = {myFirt_chekbox} color={chekboxone}/>}>
          <Route path="cache" element={<Cache />} />
          <Route path="home" element={<TextForm heading ='Enter your text' myBtn = {firstbtn}/> } />
          <Route path='hooks' element={<HOOKS /> } />
          <Route path="about" element={<About />}/>
          <Route path="projects" element={<Projects />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    <br />
{/* <Footer lastFooter ={myFooter}/> */}
    </>
)
 }
 export default App;
