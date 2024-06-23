import { useState } from "react";
import "./Address.css";
import MapComponent from "../../components/MapComponent/MapComponent";

export default function Address() {
    const [street, setStreet] = useState('');
    const [addressName, setAddressName] = useState('');

    const handleAddAddress = () => {
        console.log('Street:', street);
        console.log('Address Name:', addressName);
        // Aquí puedes manejar la lógica para agregar la dirección
    };

    return (
    <>
    <h1>Agregar Dirección</h1>
    <div className="add-address">
      <div className="form-group">
        <label htmlFor="street">Calle</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder="Ingrese la calle"
          />
      </div>
      <div className="map-container">
        <MapComponent />
      </div>
      <div className="form-group">
        <label htmlFor="addressName">Nombre de Dirección</label>
        <input
          type="text"
          id="addressName"
          value={addressName}
          onChange={(e) => setAddressName(e.target.value)}
          placeholder="Ingrese el nombre de la dirección"
          />
      </div>
      <button className="add-button" onClick={handleAddAddress}>
        Agregar Dirección
      </button>
    </div>
    </>
  );
}