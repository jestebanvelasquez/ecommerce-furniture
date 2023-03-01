import { productsData } from '../../data'

export const Products = () => {
    return (
        <main className='contenido-principal contenedor' >
            <h2 className='text-center'>Nuestros Productos</h2>
            <div className='listado-productos'>
                    {
                        productsData.map((item, i) => (
                            <div key={i} className='producto'>
                                <img src={item.img} alt={`${item.title}`} />
                                <div className='texto-produto'>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <p>$ {item.price}</p>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </main>
    );
};
