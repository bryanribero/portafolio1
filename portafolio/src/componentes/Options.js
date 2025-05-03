import React from 'react'
import '../styles/Options.css'

export const Options = () => {
  return (
    <div>
      <ul className="list-unstyled">
        <li className="nav-item">
          <a className="nav-link" href="#about">
            <span className="line"></span> About
          </a>
        </li>
        <li className="nav-item nav-item-active">
          <a className="nav-link" href="#about">
            <span className="line line-active"></span> Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            <span className="line"></span> Projects
          </a>
        </li>
      </ul>
    </div>
  )
}
