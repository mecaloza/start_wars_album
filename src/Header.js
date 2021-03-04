import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
// import SearchIcon from '@material-ui/icons/Search';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
// import { auth } from './firebase';
import { useState, useEffect } from "react";

function Header() {
    const [basket, setbasket] = useState("");
    const [user, setuser] = useState("");

    console.log(basket);
    const login=()=>{
        if(user){
            // auth.signOut();
        }
    }
    return (
        <nav className="header">
            
            {/*logo onthe left*/}
        <Link to="/" >
        <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo-jedi-order.png"
             alt=""
            />
        </Link>
            
            {/*serach box*/}
            
            <div className="header__search">
            
            <img className="header__searchInput" src=" https://cdn.pixabay.com/photo/2017/06/03/18/21/star-wars-2369317_960_720.png"
             alt=""
            />
            {/* <SearchIcon className="header__searchIcon"/> */}
            </div>
            {/*3 links*/}
            <div className="header__nav">
                <Link on to={!user && "/login"} className="header__link">
                <div onClick={login}className="header__option">
                    <span className="header__optionLineOne">Hola {user?.email} </span>
                    <span className="header__optionLineTwo">{user ? "Sig out" : "Sig In" }</span>
                </div>
                
                </Link>

       

                <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Tus</span>
                    <span className="header__optionLineTwo">Laminas</span>
                </div>
                
                </Link>



            </div>
            {/*Basket icon*/}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                   {/* shopping basker icon */}
                {/* <ShoppingBasketIcon/> */}
                   {/* Number of items */}
                <span className="header__optionLineTwo header_baketCount">{basket?.length}</span> 

                </div>
            </Link>



        </nav>
    )
}

export default Header
