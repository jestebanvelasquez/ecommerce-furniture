import React from 'react'

export const Contact = () => {
    return (
        <main className='contenedor'>
            <h2 className='text-center'>Contacto</h2>
            <form className='formulario' action="">
                <fieldset>
                    <legend>Datos Personales</legend>
                    <div className='campo'>
                    <label htmlFor="nombre"> Nombre</label>
                    <input id='nombre' type="text" required placeholder='nombre'  />
                    </div>
                    <div className='campo'>
                    <label htmlFor="email"> email</label>
                    <input id='email' type="email" placeholder='nombre'  />
                    </div>
                    <div className='campo'>
                    <label htmlFor="password"> password</label>
                    <input id='password' type="password" placeholder='nombre'  />
                    </div>
                    <div className='campo'>
                    <label htmlFor="password"> Telefono</label>
                    <input id='password' type="tel" placeholder='telefono'  />
                    </div>
                    <div className='campo'>
                        <label htmlFor="">Mensaje</label>
                        <textarea name="" id="" cols={30} rows={20}></textarea>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Pais</legend>
                    <label htmlFor="pais">Pais</label>
                    <div className='campo'>

                    <select name="" id="">
                        <option disabled value="">-- Seleccione un Pais --</option>
                        <option value="">Peru</option>
                        <option value="">Colombia</option>
                        <option value="">Argentina</option>
                        <option value="">Mexico</option>
                        <option value="">Ecuador</option>

                    </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Infromacion Extra</legend>
                        <div className='campo'>
                            <label htmlFor="">Cliente</label>
                            <input type="radio" name='tipo'  />
                        </div>

                        <div className='campo'>
                            <label htmlFor="">Proveedor</label>
                            <input type="radio" name='tipo' />
                        </div>
                </fieldset>
            <input className='bton' type="" value='enviar formulario' />
            </form>
        </main>
    )
}
