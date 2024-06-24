import { useNavigate } from "react-router-dom";
import "./Payment.css";

export default function Payment() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    };

    return(
        <div className="content">
            <h1>Pago en Línea</h1>
            <div className="payment">
                <form onSubmit={handleSubmit} className="payment-form">
                    <div className="payment-column">
                        <label className="form-label">Número de Tarjeta</label>
                        <input />
                    </div>
                    <div className="payment-column">
                        <label className="form-label">Nombre en la Tarjeta</label>
                        <input />
                    </div>
                    <div className="payment-fila">
                        <div className="payment-column pay-extra">
                            <label className="form-label">Fecha de Vencimiento</label>
                            <input />
                        </div>
                        <div className="payment-column pay-extra">
                            <label className="form-label">CVV</label>
                            <input />
                        </div>
                    </div>
                    <div className="div-pay-button">
                        <button onClick={() => navigate("/orders/123456")} className="btn btn-primary w-100 pay-button">
                            <span>Pagar</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}