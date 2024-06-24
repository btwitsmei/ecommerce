import "./Home.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();
    const [products] = useState([
        {
            id: 1,
            name: "Ensalada de rocas lunares",
            alt: "Una foto de una Ensalada de rocas lunares",
            image: "https://www.tapasmagazine.es/wp-content/uploads/2023/06/plato-chino-con-piedras-suodiu.jpg",
        },
        {
            id: 2,
            name: "Tallarin de Kalamari",
            alt: "Una foto de un plato de Tallarin de Kalamari",
            image: "https://media.licdn.com/dms/image/D4D12AQH6pZSSpjla3A/article-inline_image-shrink_1000_1488/0/1679606233057?e=1723680000&v=beta&t=cbvAxi9VatABV-bB_xLanBvydoNdPSm7TE8K_jpIR5k",
        },
        {
            id: 3,
            name: "Bebida GoSpace",
            alt: "Una foto de dos bebidas de la marca GoSpace",
            image: "https://cdna.artstation.com/p/assets/images/images/052/826/506/large/kaylee-tbrender-002-50.jpg?1660758848",
        },
    ]);

    return (
        <div className='content'>
        <div className="homepage">
            <main className="main-content">
                <section className="popular-categories">
                    <h2>CATEGORÍAS POPULARES</h2>
                    <div className="categories">
                        <div className="category">
                            <div className="category-image" />
                            <div className="category-name">
                                Nombre de la categoría
                            </div>
                        </div>
                        <div className="category">
                            <div className="category-image" />
                            <div className="category-name">
                                Nombre de la categoría
                            </div>
                        </div>
                        <div className="category">
                            <div className="category-image" />
                            <div className="category-name">
                                Nombre de la categoría
                            </div>
                        </div>
                    </div>
                </section>

                <br/>


                <section className="best-selling-products">
                    <h2>PRODUCTOS MÁS VENDIDOS</h2>
                    <br/>
                    <div className="products">
                    
                        {products.map((item) => (
                            <button onClick={() => navigate("/products/" + item.id)} key={item.id}>
                                <div className="product-image">
                                    
                                    <img src={item.image} alt={item.alt} />
                                    
                                    <div className="product">
                                        <h3>{item.name}</h3>
                                    </div>
                                    
                                </div>
                                </button>
                            
                        ))}
                    </div>
                </section>
                <br/><br/>
            </main>
        </div>
        </div>
    );
}
