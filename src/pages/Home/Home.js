
import "./Home.css";
import React, { useState } from "react";

export default function Home() {

    const [products] = useState([
        {
            id: 1,
            name: "Ensalada de rocas lunares",
            price: 24.90,
            quantity: 2,
            image: "link_to_image",
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
            image: "link_to_image",
        },
    ]);

    return(
        <div className="homepage">

      <main className="main-content">
        <section className="popular-categories">
          <h2>CATEGORÍAS POPULARES</h2>
          <div className="categories">
            <div className="category">
              <div className="category-image"/>
              <div className="category-name">Nombre de la categoría</div>
            </div>
            <div className="category">
              <div className="category-image" />
              <div className="category-name">Nombre de la categoría</div>
            </div>
            <div className="category">
              <div className="category-image" />
              <div className="category-name">Nombre de la categoría</div>
            </div>
          </div>
        </section>

        <section className="best-selling-products">
          <h2>PRODUCTOS MÁS VENDIDOS</h2>
          <div className="products">
            {products.map(item => (
                <div className="product-image" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="product">
                        <h4>{item.name}</h4>
                    </div>
                </div>
                ))}
          </div>
        </section>
      </main>
    </div>
  );
};
