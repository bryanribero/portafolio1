import React, { useState } from 'react'
import '../styles/Options.css'

export const Options = () => {

  const [activo, setActivo] = useState('About');

  const items = [
    { texto: 'About', href: '#about' },
    { texto: 'Skills', href: '#skills' },
    { texto: 'Projects', href: '#projects' },
  ];

  return (
    <div>
    <ul className="list-unstyled">
      {items.map(({ texto, href }) => (
        <li
          key={texto}
          className={`nav-item ${activo === texto ? 'nav-item-active' : ''}`}
          onClick={() => setActivo(texto)}
        >
          <a className="nav-link" href={href}>
            <span className={`line ${activo === texto ? 'line-active' : ''}`}></span>
            {texto}
          </a>
        </li>
      ))}
    </ul>
  </div>
  )
}
