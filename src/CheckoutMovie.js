import React from 'react'
import "./CheckoutMovie.css"
import {useStateValue} from './StateProvider';
import MovieIcon from '@material-ui/icons/Movie';

function CheckoutProduct({id,type_sheet,title,episode,director,producer,created}) {
    const [{basket},dispatch]=useStateValue();
  
    const removeFrombasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
            
    
        })


    }
    return (
        <div className="checkoutProduct">
      
        <div className="CheckoutProduct__info">
        <MovieIcon/>
           <p className="checkoutProduct__title">{title}</p>
           <p className="checkoutProduct__title">{episode}</p>
           <p className="checkoutProduct__title">{producer}</p>
           <p className="checkoutProduct__title">{created}</p> 

           
            <button className = "btn_sheets" onClick={removeFrombasket} >remover de album de peliculas</button>
        </div>
        </div>
    )
}

export default CheckoutProduct
