import React, { useState } from 'react';
import PlanetForm from '../../components/Planet-form/PlanetForm';
import { useNavigate } from "react-router-dom";


function PasswordResetNewPassword() {
    const navigate = useNavigate();
    return (
        <div className="col-md">
            <div className="form-container">
                <h2>REESTABLECER CONTRASEÑA</h2>
                <p>No tienes cuenta? <a href="/login">Registrate</a></p>
                <form className="form">
                    
                    
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" name="password" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Repetir nueva contraseña</label>
                        <input type="password" name="confirmPassword" className="form-control" />
                    </div>
                    <button onClick={() => navigate("/new-password-message")} type="submit" className="btn">Siguiente</button>
                </form>
            </div>
        </div>
    );
}




const NewPasswordPassword = () => {
    return (
        PlanetForm(PasswordResetNewPassword)
    );

};
export default NewPasswordPassword;