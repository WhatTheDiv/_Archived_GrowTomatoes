'use client'
import { useState } from 'react'
import Image from 'next/image'
import Icon_CartFull from '../../Resources/icons/cart_full.png'
import Icon_CartEmpty from '../../Resources/icons/cart_empty.png'
import './cartIcon.css'

export default function CartIcon() {
  function func() {
    setCartFull(!cartFull)
  }

  const [ cartFull, setCartFull ] = useState(false)

  return (
    <Image
      className='cartIcon'
      src={
        cartFull ?
          Icon_CartFull :
          Icon_CartEmpty
      }
      width={25}
      height={25}
      onClick={ func }
      alt='cart'
    />
  );
}

