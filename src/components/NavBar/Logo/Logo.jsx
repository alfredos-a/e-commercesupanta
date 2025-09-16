import React from 'react'
import LogoIMG from '../../../assets/store-logo.png'
import "./Logo.css"

export const Logo = () => {
  return (
    <div className='logo'>
      <a className='logo__link' href="">
        <img className='logo__img' src={LogoIMG} alt="store-logo" srcset="" />
      </a>
    </div>
  )
}
