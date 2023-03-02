import nosotros from '../assets/nosotros.jpg'

export const About = () => {
  return (
    <main className='contenido-principal contenedor'>
      <h2 className='text-center'>Sobre Nosotros</h2>

      <div className='container-nosotros'>
        <div className='imagen'>
          <img src={nosotros} alt="sobre nosotros" />
        </div>
        <div className='informacion-nosotros'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ut vel. Dolorem, blanditiis aliquam fuga excepturi iste odio hic! Perspiciatis provident pariatur natus. Iste quisquam similique soluta cupiditate molestiae maxime? Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> 
          <p> Atque repudiandae et sit, deleniti quae error vel, nostrum reiciendis reprehenderit optio maiores numquam distinctio accusamus sed nesciunt iste quia consequuntur cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi fugit accusamus ab laboriosam blanditiis in nemo laudantium! Cupiditate autem possimus sapiente molestias facilis blanditiis illo dignissimos eveniet ab sed.</p>
        </div>
      </div>
    </main>
  )
}
