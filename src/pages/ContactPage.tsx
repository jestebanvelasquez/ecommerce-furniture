import React from 'react'

export const Contact = () => {
    return (
        <main className='contenedor'>
            <h2 className='text-center'>Contacto</h2>
            <form action="">
                <fieldset>
                    <legend>Datos Personales</legend>
                    <div>
                    <label htmlFor="nombre"> Nombre</label>
                    <input id='nombre' type="text" placeholder='nombre'  />
                    </div>
                    <div>
                    <label htmlFor="email"> email</label>
                    <input id='email' type="email" placeholder='nombre'  />
                    </div>
                    <div>
                    <label htmlFor="password"> password</label>
                    <input id='password' type="password" placeholder='nombre'  />
                    </div>
                    <div>
                    <label htmlFor="password"> Telefono</label>
                    <input id='password' type="tel" placeholder='telefono'  />
                    </div>
                    <div>
                        <label htmlFor="">Mensaje</label>
                        <textarea name="" id="" cols={30} rows={20}></textarea>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Pais</legend>
                    <label htmlFor="pais">Pais</label>
                    <select name="" id="">
                        <option disabled value="">-- Seleccione un Pais --</option>
                        <option value="">Peru</option>
                        <option value="">Colombia</option>
                        <option value="">Argentina</option>
                        <option value="">Mexico</option>
                        <option value="">Ecuador</option>

                    </select>
                </fieldset>
                <fieldset>
                    <legend>Infromacion Extra</legend>

                </fieldset>
            </form>
        </main>
    )
}
