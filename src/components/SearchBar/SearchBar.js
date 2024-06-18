import "./SearchBar.css"
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
    return(
        <div className="searchbar-div">
            <input type="text" className="searchbar"/>
            <button type="button" className="boton-searchbar">
                <BiSearch className="img-boton-searchbar"/>
            </button>
        </div>
    );
}