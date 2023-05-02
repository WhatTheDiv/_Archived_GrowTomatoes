import Link from 'next/link'
import Logo from '../Components/LogoSec/logo'
import Menu from '../Components/Menu/menu'
import Search from '../Components/SearchButton/searchButton.jsx'
import Cart from '../Components/CartIcon/cartIcon'
import './navBar.css'


export default function NavBar() {
  return (
    <nav>
      <ul>
        <li><Menu/></li>
        <li><Link href='/'><Logo/></Link></li>
        <li>
          <Search/>
          <Cart/>
        </li>
      </ul>
    </nav>
  )
}