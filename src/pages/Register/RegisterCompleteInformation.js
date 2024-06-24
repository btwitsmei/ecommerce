import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from "react-router-dom";

import PlanetForm from '../../components/Planet-form/PlanetForm';

function RegisterInformation() {
    const navigate = useNavigate();
    return (
        <div className="col-md">
          <div className="form-container">
            <h2>REGISTRARSE</h2>
            <p>Ya tienes cuenta? <a href="#">Inicia Sesion</a></p>
            <form className="form">
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" name="nombre" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Planeta</label>
                <input type="text" name="planeta" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">DUI</label>
                <input type="text" name="dui" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input type="password" name="password" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirma contraseña</label>
                <input type="password" name="confirmPassword" className="form-control" />
              </div>
              <button onClick={() => navigate("/")} type="submit" className="btn">Siguiente</button>
            </form>
          </div>
        </div>
      );
}



const RegisterCompleteInformation = () => {
    return (
        PlanetForm(RegisterInformation)
    );

};
export default RegisterCompleteInformation;