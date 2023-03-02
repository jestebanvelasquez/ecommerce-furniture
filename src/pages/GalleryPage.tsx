import { galleryData } from '../data/gallery';

export const Gallery = () => {
  return (
    <main className='contenedor'>
      <h2 className='text-center'>Nuestra Galeria</h2>
      <ul className='galeria'> 
        {
          galleryData.map((gallery,i) => (
            <li key={i}>
              <a href={'#'}>
                <img src={gallery.img} alt={gallery.alt}/>
              </a>
            </li>

          ))
        }
      </ul>
    </main>
  )
}
