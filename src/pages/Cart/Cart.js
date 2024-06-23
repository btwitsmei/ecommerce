import { useState } from "react";
import "./Cart.css";

export default function Cart() {
    const [timeEnvio, setTimeEnvio] = useState(false);
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Ensalada de rocas lunares",
            price: 24.90,
            quantity: 2,
            image: "https://www.tapasmagazine.es/wp-content/uploads/2023/06/plato-chino-con-piedras-suodiu.jpg",
        },
        {
            id: 2,
            name: "Tallarin de Kalamari",
            price: 43.90,
            quantity: 2,
            image: "https://media.licdn.com/dms/image/D4D12AQH6pZSSpjla3A/article-inline_image-shrink_1000_1488/0/1679606233057?e=1723680000&v=beta&t=cbvAxi9VatABV-bB_xLanBvydoNdPSm7TE8K_jpIR5k",
        },
        {
            id: 3,
            name: "Bebida GoSpace",
            price: 2.90,
            quantity: 1,
            image: "https://cdna.artstation.com/p/assets/images/images/052/826/506/large/kaylee-tbrender-002-50.jpg?1660758848",
        },
    ]);

    const handleQuantityChange = (id, delta) => {
        const newCartItems = cartItems
            .map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + delta };
                }
                return item;
            })
            .filter((item) => item.quantity > 0);
        setCartItems(newCartItems);
    };

    const handleRemove = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const handleChangeTime = () => {
        setTimeEnvio(!timeEnvio);
    }

    const totalCost = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return(
        <div className='content'>
        <div className="shopping-cart">
            <div className="cart-items">
                <div className="title">
                    <h1>Tu Carrito</h1>
                    <h1>{cartItems.length > 1 ? cartItems.length + " Productos": cartItems.length + " Producto"}</h1>
                </div>
                <hr />
                {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                        <h4>{item.name}</h4>
                        <div className="quantity-controls">
                            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                        </div>
                        <p>Total: S/. {(item.price * item.quantity).toFixed(2)}</p>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
                ))}
                {/* <a href="#">← Continue Shopping</a> */}
            </div>
            <div className="order-summary">
                <h2>Resumen de Orden</h2>
                <div className="costos">
                    <div className="costo">
                        <p>Sub-Total</p>
                        <p>S/. {totalCost.toFixed(2)}</p>
                    </div>
                    <div className="costo">
                        <p>Envío</p>
                        <p>S/. 2.99</p>
                    </div>
                    <div className="costo">
                        <p>Servicio</p>
                        <p>S/. 4.99</p>
                    </div>
                    <hr />
                    <div className="costo">
                        <p><b>Total:</b></p>
                        <p>S/. {(totalCost + 4.99 + 2.99).toFixed(2)}</p>
                    </div>
                </div>
                <div className="order-summary-box">
                    <span>Dirección de Entrega</span>
                    <select>
                        <option value="1">Mi casa</option>
                        <option value="2">Casa de amiga</option>
                    </select>
                </div>
                <div className="order-summary-box" id="timeSelection">
                    <div className="timeSelection">
                        <span>Fecha de Entrega</span>
                        <select className="timeSelect" onChange={handleChangeTime}>
                            <option value="true">Ahora</option>
                            <option value="false">Después</option>
                        </select>
                    </div>
                    {timeEnvio &&
                    <div className="timeSelection">
                    <span>Hora</span>
                        <select className="timeSelect">
                            <option value="true">15:00</option>
                            <option value="false">16:00</option>
                        </select>
                    </div>
                    }
                </div>
                <div className="order-summary-box">
                    <span>Método de Pago</span>
                    <select>
                        <option value="1">Efectivo</option>
                        <option value="1">Tarjeta contraentrega</option>
                        <option value="1">Pago en Línea</option>
                    </select>
                </div>
                <button className="checkout-button">Comprar</button>
            </div>
        </div>
        </div>
    );
}
