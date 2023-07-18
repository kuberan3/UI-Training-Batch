import "./App.css";
// import { colourbutton } from './components/colourbutton';

import React, { useState } from 'react';

// import { ColorChanger } from "./colourchanger";


function TaskDiv() {
    
    const [backgroundColor, setBackgroundColor] = useState('');
    // var clr =""
    const changer = (e) =>{
        setBackgroundColor("")
        // setBackgroundColor(e.target.value)
        // clr = e.target.value;
    }
  const ColorChanger = (event) => {
    event.preventDefault()
    // console.log(document.getElementById("in").value)
    setBackgroundColor(document.getElementById("in").value)
  };

    return ( 
        <div id="sampletask" style={{ backgroundColor }}>

            <h1>Background Color Changer</h1>
         <form>
        <label>
          Enter a color:
          <input type="text" id="in" onChange={changer}/>
          
        </label>
        
        <button type="submit" onClick={ColorChanger}>change colour</button>

      </form>
        </div>
    );
    }
export default TaskDiv;