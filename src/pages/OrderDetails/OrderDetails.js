import { useParams } from "react-router-dom";
import "./OrderDetails.css";
import { FaCalendarAlt, FaHourglassStart, FaTruck, FaCheck } from 'react-icons/fa';

export default function OrderDetails() {
    const { id } = useParams();
    const statuses = ["Recibido","En preparación","En camino","Entregado"];
    const details = [
        {
            id: 123456,
            restaurante: "Ejemplix",
            direccion: "Av. del Ejemplo 1234",
            estado: 1,
            productos: [
                {
                    nombre: "Producto 1",
                    precio: 39.90,
                },
                {
                    nombre: "Producto 2",
                    precio: 59.90,
                }
            ],
        },
        {
            id: 123450,
            restaurante: "Ejemplix",
            direccion: "Av. del Ejemplo 1234",
            estado: 3,
            productos: [
                {
                    nombre: "Producto 1",
                    precio: 39.20,
                }
            ],
        }
    ];

    const orderDetail = details.find(detail => detail.id === parseInt(id));

    if (!orderDetail) {
        return <h1>Error 404: Pedido no encontrado</h1>;
    }

    return (
        <>
            <h1>Pedido #{orderDetail.id}</h1>
            <h2>Estado del Pedido</h2>
            <div className="progress">
            {statuses.map((status, index) => (
                <div key={index} className={`step ${orderDetail.estado === index ? 'active' : ''}`}>
                    <span className="icon">
                        {index === 0 && <FaCalendarAlt />}
                        {index === 1 && <FaHourglassStart />}
                        {index === 2 && <FaTruck />}
                        {index === 3 && <FaCheck />}
                    </span>
                    <span className="text">{status}</span>
                </div>
            ))}
        </div>
            <h2>Detalles del Pedido</h2>
            <div className="orderDetails">
                <p><b>Restaurante:</b> {orderDetail.restaurante}</p>
                <p><b>Dirección:</b> {orderDetail.direccion}</p>
                <p><b>Estado:</b> {statuses[orderDetail.estado]}</p>
                <h3>Producto{orderDetail.productos.length > 1? "s": ""} ordenado{orderDetail.productos.length > 1? "s": ""}: {orderDetail.productos.length}</h3>
                <table>
                    <tbody className="productos">
                        {orderDetail.productos.map((producto, index) => (
                            <tr className="producto" key={index}>
                                <td><p>{producto.nombre}</p></td>
                                <td><p><b>Precio:</b> S/. {producto.precio.toFixed(2)}</p></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <hr />
                <div className="total">
                    <p><b>Subtotal:</b> S/. {orderDetail.productos.reduce((sum, producto) => sum + producto.precio, 0).toFixed(2)}</p>
                    <p><b>Envío:</b> S/. 2.99</p>
                    <p><b>Servicio:</b> S/. 4.99</p>
                    <p><b>Total:</b> S/. {(orderDetail.productos.reduce((sum, producto) => sum + producto.precio, 0) + 2.99 + 4.99).toFixed(2)}</p>
                </div>
            </div>
        </>
    );
}