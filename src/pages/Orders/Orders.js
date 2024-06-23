import { useNavigate } from "react-router-dom";
import "./Orders.css";
export default function Orders() {
    const pedidos = [
        {
            id: 123456,
            restaurante: "Ejemplix",
            totalPagado: 107.78,
            fecha: "15/06/24",
        },
        {
            id: 123450,
            restaurante: "Ejemplix",
            totalPagado: 47.18,
            fecha: "13/06/24",
        },
    ];

    return (
        <div className='content'>
        <div className="pedidos">
            <h1>Pedidos</h1>
            {pedidos.map((pedido) => (
                <Pedido
                    key={pedido.id}
                    id={pedido.id}
                    restaurante={pedido.restaurante}
                    totalPagado={pedido.totalPagado}
                    fecha={pedido.fecha}
                />
            ))}
        </div>
        </div>
    );
}

function Pedido({ id, restaurante, totalPagado, fecha }) {
    const navigate = useNavigate();

    return (
        <div className="pedido">
            <div className="pedido-info">
                <p><b>Pedido #{id}</b></p>
                <p><b>Restaurante:</b> {restaurante}</p>
                <p><b>Total Pagado:</b> S/. {totalPagado}</p>
            </div>
            <div className="pedido-der">
                <div className="pedido-fecha">
                    <p><b>Fecha:</b> {fecha}</p>
                </div>
                <button className="ver-detalles" onClick={() => navigate("/orders/"+id)}><span>Ver Detalles</span></button>
            </div>
        </div>
    );
}
