
import "./Home.css";
import React from "react";

export default function Home() {

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
            <div className="product">
              <div className="product-image">
                <img alt="Tallarin de Kalamari" src= "https://media.licdn.com/dms/image/D4D12AQH6pZSSpjla3A/article-inline_image-shrink_1000_1488/0/1679606233057?e=1723680000&v=beta&t=cbvAxi9VatABV-bB_xLanBvydoNdPSm7TE8K_jpIR5k"/>
                </div>

              <div className="product-description">Tallarin de Kalamari</div>
            </div>
            <div className="product">
              <div className="product-image" />
              <div className="product-description">Descripción del producto</div>
            </div>
            <div className="product">
              <div className="product-image" />
              <div className="product-description">Descripción del producto</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
