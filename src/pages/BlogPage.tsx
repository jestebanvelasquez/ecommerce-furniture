import colores from '../assets/nosotros.jpg'

export const Blog = () => {
    return (
        <main className='contenido-principal contenedor'>
            <h2 className='text-center'> Nuestro Blog </h2>
            <section className='contenedor-blog'>
                <div className="blog">
                    {/*  el article se utiliza para ontenidos que son auto representativos, que contienen toda su info, se utiliza para una entrada de blog, una entrada de un articulo, una revista, un periodico un comentario...  */}
                    <article className='entrada'>
                            <h2>Guia de Colores</h2>
                            <div>
                                <div className='imagen'>
                                    <img src={colores} alt="colores de temporada" />
                                </div>
                            <div className='entrada-meta' >
                                <p>Fecha: <span>22 de octubre 2022</span></p>
                                <p>Escrito por : <span >Tienda Muebles</span></p>
                            </div>

                                <div className='entrada-blog'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis doloremque labore ipsa, laboriosam consequuntur sint. Unde iusto, repudiandae cum dolores sit ducimus hic est natus voluptatum obcaecati, ipsa amet voluptates? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam quam. Temporibus commodi, repellat voluptas nemo porro, ducimus expedita maiores consequatur pariatur adipisci animi similique quasi, nihil laboriosam explicabo assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, in? Aspernatur dolorem impedit repudiandae labore in eveniet temporibus maxime optio, vel consequatur deleniti ipsum eius. Adipisci esse nisi vel qui?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis doloremque labore ipsa, laboriosam consequuntur sint. Unde iusto, repudiandae cum dolores sit ducimus hic est natus voluptatum obcaecati, ipsa amet voluptates? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam quam. Temporibus commodi, repellat voluptas nemo porro, ducimus expedita maiores consequatur pariatur adipisci animi similique quasi, nihil laboriosam explicabo assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, in? Aspernatur dolorem impedit repudiandae labore in eveniet temporibus maxime optio, vel consequatur deleniti ipsum eius. Adipisci esse nisi vel qui?</p>
                                </div>
                                <a href='#' className='bton max-width-30' type='button'>Leer</a>
                            </div>
                    </article>
                    <article className='entrada'>
                            <h2>Guia de Colores</h2>
                            <div>
                                <div className='imagen'>
                                    <img src={colores} alt="colores de temporada" />
                                </div>
                            <div className='entrada-meta' >
                                <p>Fecha: <span>22 de octubre 2022</span></p>
                                <p>Escrito por : <span >Tienda Muebles</span></p>
                            </div>
                                <div className='entrada-blog'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis doloremque labore ipsa, laboriosam consequuntur sint. Unde iusto, repudiandae cum dolores sit ducimus hic est natus voluptatum obcaecati, ipsa amet voluptates? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam quam. Temporibus commodi, repellat voluptas nemo porro, ducimus expedita maiores consequatur pariatur adipisci animi similique quasi, nihil laboriosam explicabo assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, in? Aspernatur dolorem impedit repudiandae labore in eveniet temporibus maxime optio, vel consequatur deleniti ipsum eius. Adipisci esse nisi vel qui?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis doloremque labore ipsa, laboriosam consequuntur sint. Unde iusto, repudiandae cum dolores sit ducimus hic est natus voluptatum obcaecati, ipsa amet voluptates? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quisquam quam. Temporibus commodi, repellat voluptas nemo porro, ducimus expedita maiores consequatur pariatur adipisci animi similique quasi, nihil laboriosam explicabo assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, in? Aspernatur dolorem impedit repudiandae labore in eveniet temporibus maxime optio, vel consequatur deleniti ipsum eius. Adipisci esse nisi vel qui?</p>
                                </div>
                                <a href='#' className='bton max-width-30' type='button'>Leer</a>
                            </div>
                    </article>
                </div>


                {/* el aside se utiliza para contener informacion relacionada a la pagina, se usa como barras laterales de navegacion  */}
                <aside>
                    <h3>Otras Entradas de Blog</h3>
                    <ul>
                        <li>
                            <a href="/blog">Guia de Colores</a>
                        </li>
                        <li>
                            <a href="/blog">Nuevos Modelos</a>
                        </li>
                        <li>
                            <a href="/blog">Consejos Sobre Decoracion</a>
                        </li>
                        <li>
                            <a href="/blog">Diseños en Exteriores</a>
                        </li>
                        <li>
                            <a href="/blog">Consejos Sobre Cuidado Muebles</a>
                        </li>
                    </ul>
                </aside>
            </section>
        </main>
    )
}
