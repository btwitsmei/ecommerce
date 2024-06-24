import React, { useState } from 'react';
import PlanetForm from '../../components/Planet-form/PlanetForm';
import { useNavigate } from "react-router-dom";


function PasswordResetCode() {
    const [code, setCode] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ code });
    };

    return (
        <div className="col-md">
            <div className="form-container">
                <div className="card-body">
                    <h2 className="card-title ">REESTABLECER CONTRASEÑA</h2>
                    <p>
                        No tienes cuenta? <a href="/register">Registrate</a>
                    </p>
                    <p>
                        Ingresar el código enviado    
                    </p>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="mb-3">
                            <label className="form-label">Código de 6 dígitos</label>
                            <input
                                type="text"
                                className="form-control"
                                id="code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                required
                            />
                        </div>

                        <button onClick={() => navigate("/new-password-new")}type="submit" className="btn btn-primary w-100">Siguiente</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const NewPasswordCode = () => {
    return (
        PlanetForm(PasswordResetCode)
    );

};
export default NewPasswordCode;