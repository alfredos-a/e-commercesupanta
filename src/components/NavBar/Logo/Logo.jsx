import React from 'react'
import { Link } from 'react-router-dom'
import LogoIMG from '../../../assets/store-logo.png'
import "./Logo.css"

export const Logo = () => {
  return (
    <div className='logo'>
      <Link className='logo__link' to="/">
        <img className='logo__img' src={LogoIMG} alt="store-logo"/>
      </Link>
    </div>
  )
}
