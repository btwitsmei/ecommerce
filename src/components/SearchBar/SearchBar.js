import "./SearchBar.css"
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
    return(
        <div className="searchbar-div">
            <input type="text" className="searchbar" placeholder="Busca productos"/>
            <button id="search" type="button" className="SearchButton" aria-label="SearchButton">
                <BiSearch className="img-boton-searchbar"/>
            </button>
        </div>
    );
}