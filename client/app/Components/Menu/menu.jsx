'use client'
import Link from 'next/link'
import { useState } from 'react'
import './menu.css'
import Image from 'next/image'
import Icon_Menu from '../../Resources/icons/menu.png'

export default function Menu() {
  function toggleMenu(){
    console.log('clicked')
    setMenuOpen(!menuOpen)
  }
  const [ menuOpen, setMenuOpen ] = useState(false)
  const className = 'container_menuDropdown ' + (menuOpen ? 'menuDropdown_show' : 'menuDropdown_hide')
  

  return (
    <div className="container_menu">
      <Image 
        src={Icon_Menu}
        alt="Menu"
        width={25}
        height={25}
        onClick={ toggleMenu }
      />
      <div className={className}>
        <ul>
          <li onClick={ toggleMenu } ><Link href='/'> - Home - </Link></li>
          <li onClick={ toggleMenu } ><Link href='/Products'> - Products - </Link></li>
          <li onClick={ toggleMenu } ><Link href='/Cart'> - Cart - </Link></li>
          <li onClick={ toggleMenu } >- About -</li>
          <li onClick={ toggleMenu } ><Link href='/Admin'>- Admin -</Link></li>
        </ul>
      </div>
    </div>
  );
}