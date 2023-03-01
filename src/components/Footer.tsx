import React from 'react'

export const Footer = () => {
    return (
        <footer className=' site-footer'>
            <div className='grid-footer contenedor'>
                <div className='info-footer'>
                    <h3>Categorias</h3>
                    <nav className='footer-menu'>
                        <a href="#">Cocina</a>
                        <a href="#">Oficina</a>
                        <a href="#">Jardin</a>
                        <a href="#">Cochera</a>
                        <a href="#">Dormitorios</a>
                    </nav>
                </div>
                <div>
                    <h3>Sobre Nosotros</h3>
                    <nav className='footer-menu'>
                        <a href="#">Nuestra Historia</a>
                        <a href="#">Mision, Vision, Valores</a>
                        <a href="#">Carreras</a>
                        <a href="#">Politica de Privacidad</a>
                        <a href="#">Terminos del Servicio</a>
                    </nav>
                </div>
                <div>

                    <h3>Soporte</h3>
                    <nav className='footer-menu'>
                        <a href="#">Preguntas Frecuentes</a>
                        <a href="#">Ayuda en Linea</a>
                        <a href="#">Confianza y Seguridad</a>
                    </nav>
                </div>
            </div>
            <p className='copyright'>Todos los derechos reservados</p>
        </footer>
    )
}
