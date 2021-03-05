import React from 'react'
import "./Home.css";
import { bounceInLeft } from 'react-animations';
// import Product from "./Product.js"
import Radium, {StyleRoot} from 'radium';
import { useState, useEffect } from "react";



function Home() {
    const [shake, setShake] = useState(false);
    const [sheet_visible, setsheet_visible] = useState(false);
    const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  }
    const animate = () => {
        
        // Button begins to shake
        setShake(true);
        setsheet_visible(true);
        
        // Buttons tops to shake after 2 seconds
        setTimeout(() => setShake(false), 2000);
        
    }
    return (
        <div className="Home">
               <div class="time">
        <span class="minute">{minute}</span>
        <span>:</span>
        <span class="second">{second}</span>
      </div>
      {/* <div class="buttons">
        <button onClick={() => setIsActive(!isActive)} class="start">
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={stopTimer} class="reset">
          Reset
        </button>
      </div> */}
        <div className="sheets_colum"> 
        {sheet_visible ? (
        <div className="sheets_block">
        <button  className = {shake ? `shake` : "test"}>Sobre 1</button>
        <button  className = {shake ? `shake` : "test"}>Sobre 2</button>
       </div>
      ) : null}
        

        
        <img className="home__image"
        src="https://vistapointe.net/images/star-wars-1.jpg"
        alt=""
        ></img>
      {sheet_visible ? (
        <div className="sheets_block">
        <button  className = {shake ? `shake` : "test"}>Sobre 3</button>
        <button  className = {shake ? `shake` : "test"}>Sobre 4</button>
       </div>
      ) : null}
        
        </div> 
            <button className="btn-userconfigadd" onClick={animate}   type="button" > 
                obtener laminas
            </button>
        
       

        

        </div>
        
        
    )
}

export default Home
