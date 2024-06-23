import React from 'react';
import earthImage from '../../assets/earth.png'; // Asegúrate de actualizar esta ruta al lugar correcto de tu imagen
import './PlanetForm.css';

const ComponenteImagenTierra = (Form) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-auto">
          <img src={earthImage} alt="Earth" className="earth-image" />
        </div>
        <Form></Form>
      </div>
    </div>
  );
};

export default ComponenteImagenTierra;