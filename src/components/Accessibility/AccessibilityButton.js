import { useState } from "react";
import { AiOutlineClose, AiOutlineFontSize } from "react-icons/ai";
import { BsAlphabet, BsTextCenter } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { LuImageOff } from "react-icons/lu";
import { RxLetterSpacing } from "react-icons/rx";
import { RiContrastDropFill, RiContrastFill } from "react-icons/ri";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import "./AccessibilityButton.css";

export default function AccessibilityButton() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aumentado, setAumentado] = useState(false); // Estado para controlar si el tamaño está aumentado o no

    // Función para alternar entre aumentar y volver al tamaño normal
    const alternarTamano = () => {
        setAumentado(!aumentado); // Cambiar el estado de aumentado
        console.log("Aumentando de tamaño");
        if (!aumentado) {
            document.body.classList.add('aumentado');
          } else {
            document.body.classList.remove('aumentado');
          }
    };

    const buttons = [
        { id: 1, label: "Texto más grande", icon: <AiOutlineFontSize />, funcion: () => alternarTamano() },
        { id: 2, label: "Contraste", icon: <RiContrastFill /> , funcion: null},
        { id: 3, label: "Fuente", icon: <BsAlphabet />, funcion: null },
        { id: 4, label: "Espacio entre palabras", icon: <RxLetterSpacing />, funcion: null },
        { id: 5, label: "Espacio entre líneas", icon: <MdOutlineFormatLineSpacing />, funcion: null},
        { id: 6, label: "Alineación de Texto", icon: <BsTextCenter />, funcion: null },
        { id: 7, label: "Saturación", icon: <RiContrastDropFill />, funcion: null },
        { id: 8, label: "Quitar Imágenes", icon: <LuImageOff />, funcion: null },
    ];

    const handleButtonClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="Accessibility">
            <button onClick={handleButtonClick} className="AButton">
                <IoEyeOutline />
            </button>
            {menuOpen && (
                <div className="AccessibilityMenu">
                    <div className="AMenuTitle">
                        <h2>Menú de Accesibilidad</h2>
                        <button
                            onClick={handleButtonClick}
                            className="AMButton"
                        >
                            <AiOutlineClose className="AMT-icon" />
                        </button>
                    </div>
                    <div className="AMenuContent">
                        <div className="AMC-Select">
                            <p>Daltonismo</p>
                            <select>
                                <option>Ninguno</option>
                                <option>Protanomalía</option>
                                <option>Deuteranomalía</option>
                                <option>Tritanomalía</option>
                            </select>
                        </div>
                        <div className="grid-container">
                            {buttons.map((button) => (
                                <button key={button.id} className="grid-item" onClick={button.funcion}>
                                    <p>
                                        {button.icon != null ? (
                                            button.icon
                                        ) : (
                                            <></>
                                        )}
                                    </p>
                                    <p>{button.label}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
