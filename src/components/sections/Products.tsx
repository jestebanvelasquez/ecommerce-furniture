import { productsData } from '../../data'

export const Products = () => {
    return (
        <main>
            <h2>Nuestros Productos</h2>
            <div>
                <div>
                    {
                        productsData.map((item, i) => (
                            <div key={i}>
                                <img src={item.img} alt={`${item.title}`} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <p>$ {item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    );
};
