import React,{ useState } from 'react'
import '../styles/Idioma.css'

export const Idioma = () => {
const [activo, setActivo] = useState('English');

const cambiarIdioma = (idioma) => {
    setActivo(idioma);
  };

  return (
    <div className='d-flex'>
    <button
      className={`p-1 me-3 ms-3 idioma ${activo === 'Español' ? 'active' : ''}`}
      onClick={() => cambiarIdioma('Español')}
    >
      Español
    </button>
    <button
      className={`p-1 idioma ${activo === 'English' ? 'active' : ''}`}
      onClick={() => cambiarIdioma('English')}
    >
      English
    </button>
  </div>
  )
}
