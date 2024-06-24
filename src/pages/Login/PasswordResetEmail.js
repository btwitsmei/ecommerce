import React, { useState } from 'react';
import PlanetForm from '../../components/Planet-form/PlanetForm';
import { useNavigate } from "react-router-dom";


function PasswordResetEmail() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({ email });
    };

    return (
        <div className="col-md">
            <div className="form-container">
                <div className="card-body">
                    <h2 className="card-title ">REESTABLECER CONTRASEÑA</h2>
                    <p>
                        No tienes cuenta? <a href="/register">Registrate</a>
                    </p>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <button onClick={() => navigate("/new-password-code")} type="submit" className="btn btn-primary w-100">Siguiente</button>
                    </form>
                </div>
            </div>
        </div>
    );
}




const NewPasswordEmail = () => {
    return (
        PlanetForm(PasswordResetEmail)
    );

};
export default NewPasswordEmail;