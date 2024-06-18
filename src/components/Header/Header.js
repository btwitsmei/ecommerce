import { BiSolidCart } from "react-icons/bi";
import { BiSolidReceipt } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { useAttention } from "../../assets/contexts/AttentionContext";

import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import { useAuth } from "../../assets/contexts/AuthContext";

export default function Header({loggedIn}) {
    const navigate = useNavigate();
    const location = useLocation();
    const { attention } = useAttention();

    return(
        <header>
            <button className="boton-header-brand" onClick={() => {if(location.pathname !== "/") navigate("/");}}>
                <h1>Yummy Food</h1>
            </button>
            {attention ? <></> : 
                <>
                    <SearchBar />
                    <HeaderButtons/>
                </>
            }
        </header>
    );
}

function HeaderButtons() {
    const { isAuthenticated } = useAuth()
    const location = useLocation();
    const navigate = useNavigate();

    function HandleNavigation(url) {
        if (location.pathname !== url) {
            navigate(url);
        }
    }

    return(
        <div className="header-buttons">
            {isAuthenticated ? 
                <>
                <button className="boton-header" onClick={() => {HandleNavigation("/profile")}}>
                    <BiSolidUser className="img-boton-header"/>
                    <p>Perfil</p>
                </button>
                <button className="boton-header" onClick={() => {HandleNavigation("/orders")}}>
                    <BiSolidReceipt className="img-boton-header" />
                    <p>Pedidos</p>
                </button>
                </>
                :
                <button className="boton-header-login" onClick={() => {HandleNavigation("/login")}}>
                    <BiSolidUser className="img-boton-header"/>
                    <p>Inicia Sesión</p>
                </button>
            }
            <button className="boton-header" onClick={() => {HandleNavigation("/cart")}}>
                <BiSolidCart className="img-boton-header"/>
                <p>Carrito</p>
            </button>
        </div>
    );
}