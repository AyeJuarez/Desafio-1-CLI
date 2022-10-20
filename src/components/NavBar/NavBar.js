import { useState } from 'react';
import './Navbar.scss';
import CartWidget from '../CartWidget'
import { Icon, Icons } from '../styled-components/Icons'


export default function Navbar() {
  const [openState, setOpenState] = useState(false)

  return <nav className="nav">
    
    <a href="/" className="siteTitle">Inicio</a>
    <ul>
      <li>
        <a href="/contact">Contactanos</a>
      </li>
      <li>
        <a href="/about">Sobre Nosotros</a>
      </li>

    
        <Icons>
          <CartWidget />
          <Icon className={'menu'} onClick={() => setOpenState(!openState)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='inherit'
              color='inherit'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </Icon>

        </Icons>
        </ul>
  </nav>
  
}