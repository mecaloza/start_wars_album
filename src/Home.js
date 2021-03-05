import React from 'react'
import "./Home.css";
import { bounceInLeft } from 'react-animations';
// import Product from "./Product.js"
import Radium, {StyleRoot} from 'radium';
import { useState, useEffect } from "react";
import MovieIcon from '@material-ui/icons/Movie';
import Movie from "./Movie.js"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';



function Home() {
    const [shake, setShake] = useState(false);
    const [sheet_visible, setsheet_visible] = useState(false);
    const [sheet_selection, setsheet_selection] = useState(false);

    const [json_response, setJson_response] = useState();
    const [sheet_type, setsheet_type] = useState("movie");
    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);
    const [isLoadingGlobal, setIsLoadingGlobal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fetchSuccess, setFetchSuccess] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [txtmodal, setTxtmodal] = useState("");
  const selec_folder = () =>{
    setIsActive(!isActive)
    setsheet_selection(true)
    setsheet_visible(false)
    get_sheets();

  };

  const get_sheets = () => {
    const min = 1;
    const max = 6;
    const rand = min + Math.random() * (max - min)
    console.log(rand)
 

    fetch(`${global.url_back}films/${parseInt(rand)}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        
      },
    })
      .then((response) => {
        setIsLoadingGlobal(false);
        setIsSubmitting(false);
        if (response.status === 200) {
          return response.json().then((json_response) => {
           console.log(json_response)
           setJson_response(json_response)
            setFetchSuccess(true);
          });
        } else {
          setFetchSuccess(false);
          setTxtmodal("Algo salió mal, intenta nuevamente.");
          setOpenDialog(true);
          return false;
        }
      })
      .catch((error) => {
        setIsLoadingGlobal(false);
        setFetchSuccess(false);
        setTxtmodal("Algo salió mal, intenta nuevamente.");
        setOpenDialog(true);
        console.log(error);
      });
  };

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
        <button  className = {shake ? `shake` : "btn_initial"} onClick={selec_folder}>Sobre 1</button>
        <button  className = {shake ? `shake` : "btn_initial"} onClick={selec_folder}>Sobre 2</button>
       </div>
      ) : null}
       
    
        {sheet_selection ? (
          <>
          <Movie
          id="123456789"
          type_sheet="movie"
          title={json_response?.title}
          episode={json_response?.episode_id}
          director={json_response?.director}
          producer={json_response?.producer}
          created={json_response?.created}
  
          />
          <button  className = "btn_next" onClick={get_sheets}><ArrowForwardIcon/></button>
          </>
      ) : null}
        

      
        

        
        <img className="home__image"
        src="https://vistapointe.net/images/star-wars-1.jpg"
        alt=""
        ></img>
      {sheet_visible ? (
        <div className="sheets_block">
        <button  className = {shake ? `shake` : "btn_initial"} onClick={selec_folder}>Sobre 3</button>
        <button  className = {shake ? `shake` : "btn_initial"} onClick={selec_folder}>Sobre 4</button>
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
