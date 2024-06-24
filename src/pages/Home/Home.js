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

    const [categories] = useState([
        {
            id: 1,
            name: "Promociones y ofertas",
            alt: "Una foto de Promociones y ofertas",
            image: "https://cuadernodemarketing.com/wp-content/uploads/2015/01/promocionesydescuentos.jpg",
        },
        {
            id: 2,
            name: "Planetas",
            alt: "Una foto de planetas",
            image: "https://imagenes.muyinteresante.com/files/image_670_447/uploads/2023/05/22/646b259c53bc8.jpeg",
        },
        {
            id: 3,
            name: "Popular",
            alt: "Una foto de dos bebidas de la marca GoSpace",
            image: "https://cdn-icons-png.freepik.com/512/7251/7251267.png?ga=GA1.1.1067070874.1719246083",
        },
    ]);

    return (
        <div className='content'>
        <div className="homepage">
            <main className="main-content">
                <section className="popular-categories">
                    <h2>CATEGORÍAS POPULARES</h2> 
                    <div className="categories">
                    {categories.map((item) => (
                            <button onClick={() => navigate("/categories/" + item.id)} key={item.id}>
                                <div className="product-image">
                                    
                                    <img src={item.image} alt={item.alt} />
                                    
                                    <div className="category">
                                        <h3><p>{item.name}</p></h3>
                                    </div>
                                    
                                </div>
                                </button>
                            
                        ))}
                        
                    </div>
                </section>

                <br/>
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
                                        <h3><p>{item.name}</p></h3>
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
