import React from 'react';
import PlanetForm from '../../components/Planet-form/PlanetForm';
import { useNavigate } from "react-router-dom";

const LoginInformation = () => {
    const navigate = useNavigate();


    return (
        <div className="col-md">
            <div className="form-container">
                <h2>Iniciar Sesión</h2>
                <p>No tienes cuenta? <a href="/register">Registrate</a></p>
                <form className="form">
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" name="nombre" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" name="password" className="form-control" />
                    </div>
                    <button onClick={() => navigate("/")} type="submit" className="btn"><span>Siguiente</span></button>
                    <p className='text-center'><a href="/new-password-email">Olvidó Contraseña</a></p>

                </form>

            </div>
        </div>
    );
};

function Login() {
    return (PlanetForm(LoginInformation));

}
export default Login;