import "./Footer.css";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <h4>Yummy Food</h4>
                </div>
                <div className="footer-column">
                    <h4>Categorías</h4>
                    <ul>
                        <li>Promociones y Ofertas</li>
                        <li>Planetas</li>
                        <li>Popular</li>
                        <li>Restaurantes</li>
                        <li>Vegetariano</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Sobre Nosotros</h4>
                    <ul>
                        <li>Redes Sociales</li>
                        <li>Contacto</li>
                        <li>Terminos y Condiciones</li>
                        <li>Tratamiento de Datos</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Yummy Food Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}