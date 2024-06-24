import React, { useState } from 'react';
import PlanetForm from '../../components/Planet-form/PlanetForm';
import { useNavigate } from "react-router-dom";


function PasswordResetMessage() {
    const navigate = useNavigate();
    return (
        <div className="col-md">
            <div className="form-container">
                <div className="card-body">
                    <h2 className="card-title text-center">CONTRASEÑA ESTABLECIDA</h2>
                    
                        <button onClick={() => navigate("/login")} type="submit" className="btn btn-primary w-100">Siguiente</button>
                   
                </div>
            </div>
        </div>
    );
}

const NewPasswordMessage = () => {
    return (
        PlanetForm(PasswordResetMessage)
    );

};
export default NewPasswordMessage;