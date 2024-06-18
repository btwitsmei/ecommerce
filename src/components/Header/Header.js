import SearchBar from "../SearchBar/SearchBar";
import { BiSolidCart } from "react-icons/bi";
import { BiSolidReceipt } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import "./Header.css";
import { useState } from "react";

export default function Header({atention, loggedIn}) {
    return(
        <header>
            <h1>Yummy Food</h1>
            {atention ? <></> : 
                <>
                    <SearchBar />
                    <HeaderButtons loggedIn={loggedIn}/>
                </>
            }
        </header>
    );
}

function HeaderButtons({loggedIn}) {
    return(
        <div className="header-buttons">
            {loggedIn ? 
                <>
                <button type="button" className="boton-header">
                    <BiSolidUser className="img-boton-header"/>
                    <p>Perfil</p>
                </button>
                <button type="button" className="boton-header">
                    <BiSolidReceipt className="img-boton-header"/>
                    <p>Pedidos</p>
                </button>
                </>
                :
                <button type="button" className="boton-header-login">
                    <BiSolidUser className="img-boton-header"/>
                    <p>Inicia Sesión</p>
                </button>
            }
            <button type="button" className="boton-header">
                <BiSolidCart className="img-boton-header"/>
                <p>Carrito</p>
            </button>
        </div>
    );
}