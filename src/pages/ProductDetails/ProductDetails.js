import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetails() {
    const { id } = useParams();
    const [details] = useState([
        {
            id: 1,
            name: "Ensalada de rocas lunares",
            price: 24.90,
            description: "descripcion 1",
            image: "https://www.tapasmagazine.es/wp-content/uploads/2023/06/plato-chino-con-piedras-suodiu.jpg",
        },
        {
            id: 2,
            name: "Tallarin de Kalamari",
            price: 43.90,
            description: "descripcion 2",
            image: "https://media.licdn.com/dms/image/D4D12AQH6pZSSpjla3A/article-inline_image-shrink_1000_1488/0/1679606233057?e=1723680000&v=beta&t=cbvAxi9VatABV-bB_xLanBvydoNdPSm7TE8K_jpIR5k",
        },
        {
            id: 3,
            name: "Bebida GoSpace",
            price: 2.90,
            description: "descripcion 3",
            image: "https://cdna.artstation.com/p/assets/images/images/052/826/506/large/kaylee-tbrender-002-50.jpg?1660758848",
        },
    ]);

    const productDetail = details.find(detail => detail.id === parseInt(id));

    if (!productDetail) {
        return <h1>Error 404: Producto no encontrado</h1>;
    }

    return (
        <div className='content'>
        <div className="product">
        <h1>{productDetail.name}</h1>
            <div className="productDetails">
                
                <p> <img src={productDetail.image} alt={productDetail.name} /></p>
                <p className="price"><b>Price:</b> {productDetail.price}</p>
                <p className="desc"><b>Description:</b> {productDetail.description}</p>
            </div>
        </div>
        </div>
    );
}
