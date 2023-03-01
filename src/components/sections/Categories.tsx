import { categoriesData } from '../../data'


export const Categories = () => {
  return (
    <section className='contenedor categorias'>

        <h2 className='text-center'>Categorias de Productos</h2>
      <div className='listado-categories'>
        {
          categoriesData.map((item, i) => (
            <div className='categoria' key={i}>
              <img src={item.img} alt={item.title
              }  />
              <a href={item.href}>{item.title}</a>
            </div>

          ))
        }
      </div>
    </section>
  )
}
