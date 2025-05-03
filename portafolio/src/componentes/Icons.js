import React from 'react'
import '../styles/Icons.css'
import github from '../images/icon/icons8-github.svg'
import linkedIn from '../images/icon/icons8-linkedin.svg'
import outlook from '../images/icon/icons8-ms-outlook.svg'

export const Icons = () => {
  return (
    <div>
        <img src={github} alt='github' />
        <img className='m-4' src={linkedIn} alt='linkedIn'/>
        <img src={outlook} alt='outlook'/>
    </div>
  )
}
