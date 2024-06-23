import { useState } from "react";
import "./Profile.css";
import { BiSolidEditAlt } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    const infoPerfil = {
        "id": 1,
        "usuario": "jesusito",
        "correo": "jesusruiz24@gmail.com",
        "nombre": "Jesus Ruiz",
    }

    const [direcciones, setDirecciones] = useState([
        {
            "id": 1,
            "nombre": "Mi Casa",
            "direccion": "Av. del Ejemplo 1234",
        },
        {
            "id": 2,
            "nombre": "Casa de amiga",
            "direccion": "Jr. Otro Ejemplo 789",
        }
    ]);

    const handleRemove = (id) => {
        setDirecciones(direcciones.filter((item) => item.id !== id));
    }

    return(
        <>
        <h1>Tu Perfil</h1>
        <div className="informacion">
            <h2>Información de Perfil</h2>
            <div className="info-usuario-dato">
                <span>Nombre de Usuario</span>
                <span>{infoPerfil.usuario}</span>
            </div>
            <div className="info-usuario-dato">
                <span>Nombre Completo</span>
                <span>{infoPerfil.nombre}</span>
            </div>
            <div className="info-usuario-dato">
                <span>Correo Electrónico</span>
                <span>{infoPerfil.correo}</span>
            </div>
        </div>
        <div className="informacion">
            <h2>Mis Direcciones</h2>
            {direcciones.map(direccion => (
                <div className="direccion" key={direccion.id}>
                    <p>{direccion.nombre}</p>
                    <p>{direccion.direccion}</p>
                    <div className="direccion-botones">
                        <button className="direccion-boton">
                            <BiSolidEditAlt className="img-boton-direccion"/>
                            <p>Editar</p>
                        </button>
                        <button className="direccion-boton" onClick={()=>handleRemove(direccion.id)}>
                            <BiSolidTrash className="img-boton-direccion"/>
                            <p>Eliminar</p>
                        </button>
                    </div>
                </div>
            ))}
            <button className="agregar-direccion-boton" onClick={() => navigate("/profile/address")}>Agregar Dirección</button>
        </div>
        <button className="informacion-boton">Cambiar Contraseña</button>
        </>
    );
}