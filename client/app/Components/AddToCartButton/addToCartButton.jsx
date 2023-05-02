'use client'
import './addToCartButton.css'
import Image from 'next/image'
import Icon_addToCart from '../../Resources/icons/addToBag.png'

export default function addToCartButton() {
  return (
    <button className="addToCartButton">
      <Image src={Icon_addToCart} height={25} width={25} alt='add to cart'/>
    </button>
  );
}