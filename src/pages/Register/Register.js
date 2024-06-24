import React, { useState } from 'react';
import './Register.css';
import PlanetForm from '../../components/Planet-form/PlanetForm';
import { useNavigate } from "react-router-dom";



function RegisterForm() {
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({ email, verificationCode, isCaptchaChecked });
    };

    return (
        <div className="col-md">
            <div className="form-container">
                <div className="card-body">
                    <h2 className="card-title">REGISTRARSE</h2>
                    <p >
                        Ya tienes cuenta? <a href="/login">Inicia Sesion</a>
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
                        <div className="mb-3">
                            <label className="form-label">Código de verificación</label>
                            <input
                                type="text"
                                className="form-control"
                                id="verificationCode"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="captchaCheck"
                                checked={isCaptchaChecked}
                                onChange={() => setIsCaptchaChecked(!isCaptchaChecked)}
                            />
                            <label className="form-label" >NiCaptcha</label>
                        </div>
                        <button onClick={() => navigate("/register-complete")} type="submit" className="btn btn-primary w-100"><span>Siguiente</span></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const Register = () => {
    return (
        PlanetForm(RegisterForm)
    );

};
export default Register;