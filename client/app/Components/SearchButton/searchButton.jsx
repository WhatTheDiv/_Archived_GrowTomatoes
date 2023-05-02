'use client'
import './searchButton.css'
import Image from 'next/image'
import Icon_Search from '../../Resources/icons/search.png'

export default function SearchButton() {


  return (
    <form className='navSearchButton' onSubmit={ e => searchFunc(e) }>
      <input type="search" placeholder='Search ...'/>
      <button type='submit'>  
        <Image 
          className="searchButtonImg" 
          src={Icon_Search} 
          width={14} 
          height={14} 
          alt='submit'
        />
      </button>
    </form>
  )
}

function searchFunc(e) {
  e.preventDefault()
  console.log('submitted')
}