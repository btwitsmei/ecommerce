import { useState } from "react";
import { useParams } from "react-router-dom";


export default function CategoryDetails() {
    const { id } = useParams();
    const [details] = useState([
        {
            id: 1,
            name: "Promociones y ofertas",
            description: "No hay Promociones y ofertas disponibles",
            image: "https://cuadernodemarketing.com/wp-content/uploads/2015/01/promocionesydescuentos.jpg",
        },
        {
            id: 2,
            name: "Planetas",
            description: "Contamos con cobertura a todo elo sistema solar ",
            image: "https://imagenes.muyinteresante.com/files/image_670_447/uploads/2023/05/22/646b259c53bc8.jpeg",
        },
        {
            id: 3,
            name: "Best Seller",
            alt: "Bebida GoSpace",
            description: "descripcion 3",
            image: "https://cdna.artstation.com/p/assets/images/images/052/826/506/large/kaylee-tbrender-002-50.jpg?1660758848",
        },
    ]);

    const productDetail = details.find(detail => detail.id === parseInt(id));

    if (!productDetail) {
        return <h1>Error 404: Categoria no encontrada</h1>;
    }

    return (
        <div className='content'>
        <div className="product">
        <h1>{productDetail.name}</h1>
            <div className="productDetails">
                
                <p> <img src={productDetail.image} alt={productDetail.name} /></p>
                <p><b>{productDetail.alt}</b></p>
                <p className="desc"><b>Description:</b> {productDetail.description}</p><br/>
            </div>
            
        </div>
        <br/>
        
        </div>
    );
}
