import { useState } from "react";
import { AiOutlineClose, AiOutlineFontSize } from "react-icons/ai";
import { BsAlphabet, BsTextCenter } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { LuImageOff } from "react-icons/lu";
import { RxLetterSpacing } from "react-icons/rx";
import { RiContrastDropFill, RiContrastFill } from "react-icons/ri";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import "./AccessibilityButton.css";

export default function AccessibilityButton(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const {func} = props;

    const toggleClass = (className) => {
        document.body.classList.toggle(className);
        if(className === "quitar-imagenes") {
            func();
        }
    };

    const buttons = [
        {
            id: 1,
            label: "Texto más grande",
            icon: <AiOutlineFontSize />,
            className: "aumentado",
        },
        {
            id: 2,
            label: "Contraste",
            icon: <RiContrastFill />,
            className: "alto-contraste",
        },
        {
            id: 3,
            label: "Fuente para dislexicos",
            icon: <BsAlphabet />,
            className: "cambiar-fuente",
        },
        {
            id: 4,
            label: "Espacio entre palabras",
            icon: <RxLetterSpacing />,
            className: "espacio-entre-palabras",
        },
        {
            id: 5,
            label: "Espacio entre líneas",
            icon: <MdOutlineFormatLineSpacing />,
            className: "espacio-entre-lineas",
        },
        {
            id: 6,
            label: "Alineación de Texto",
            icon: <BsTextCenter />,
            className: "alineacion-texto",
        },
        {
            id: 7,
            label: "Saturación",
            icon: <RiContrastDropFill />,
            className: "saturacion",
        },
        {
            id: 8,
            label: "Quitar Imágenes",
            icon: <LuImageOff />,
            className: "quitar-imagenes",
        },
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
                                <button
                                    key={button.id}
                                    className="grid-item"
                                    onClick={() =>
                                        toggleClass(button.className)
                                    }
                                >
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
