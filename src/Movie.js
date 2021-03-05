import React from 'react'

import {useStateValue} from './StateProvider';
import { useState, useEffect } from "react";
import MovieIcon from '@material-ui/icons/Movie';



function Product({id,type_sheet,title,episode,director,producer,created}) {
    const [{},dispatch]=useStateValue();
    const [json_response, setJson_response] = useState();
    const [sheet_type, setsheet_type] = useState("movie");
    
    const addtToBasket = () =>{
    //add itrm
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {id,
        type_sheet:type_sheet,
        title: title,
        director:director,
        episode:episode,
        producer:producer,
        created:created
        }

    })

    }
    return (
        <div className="sheets_show">
      { sheet_type === "movie" ?  (<MovieIcon/>):null}
      { sheet_type === "movie" ?  (<p className="label_input_">Pelicula</p>):null}

      <div className="sheets_info">
      <p className="label_input_Title">Titulo:</p>
      <p className="label_input_ans">{title}</p>
      </div>

      { sheet_type === "movie" ?  (<> <div className="sheets_info">
        <p className="label_input_Title">Episodio</p>
        <p className="label_input_ans">{episode}</p>
        </div>
        <div className="sheets_info">
        <p className="label_input_Title">Director:</p>
        <p className="label_input_ans">{director}</p>
        </div>
        <div className="sheets_info">
        <p className="label_input_Title">Productor:</p>
        <p className="label_input_ans">{producer}</p>
        </div>
        <div className="sheets_info">
        <p className="label_input_Title">Creada:</p>
        <p className="label_input_ans">{created}</p>
        
        </div>
        <div className="sheets_block_inside">
        <button  className = "btn_sheets" onClick={addtToBasket} >Agregar al Album</button>
       
       </div>
        
        {/* <p className="label_input_Title">Primer Parrafo:</p>
        <p className="label_input_open">{json_response?.opening_crawl}</p>
         */}
        
        </>):null}
       </div> 
    )
}

export default Product
