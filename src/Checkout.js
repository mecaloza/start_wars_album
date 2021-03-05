import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutMovie from "./CheckoutMovie"

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';



function Checkout() {
    const [{basket}]=useStateValue()
    return (
        <div className="checkout">
            <div>
           {/* <img 
           src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/Spanish/Desktop/AmazonExports_FIAT_OnSite_Concepts_R5_Spanish_Generic_DesktopStripe_1500x120_v1.png" 
           alt="" className="checkout__ad"/> 
             */}
            {basket?.length === 0 ? (
                <div>
          
                <h2 className="label_input_ans">Album Esta vacio</h2>
              

             </div>

            ):(

                <div className="sheets_chekout">
                <h2 className="checkout__title">Peliculas</h2>
                {basket?.map(item => 
                <CheckoutMovie
                id={item.id}
                title={item.title}
                director={item.director}
                episode={item.episode}
                producer={item.producer}
                created={item.created}



                ></CheckoutMovie>
                    )}
                
             </div>

            )
            
            }
            

            </div>
            
            {/* {basket.length > 0 &&( 
             <div className="checkout__right">
                 <Subtotal></Subtotal>
             </div>

            )} */}
            

        </div>

        

       
    )
}

export default Checkout
