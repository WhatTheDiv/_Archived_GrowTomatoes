import Image from 'next/image'
import Icon_Logo from '../../Resources/Logo/GrowTomatoesLogo.png'
import './logo.css'

export default function Logo() {
  return (
    <div className='container_logo'>
      <Image
          src={Icon_Logo}
          alt='Grow Tomatoes Logo'
          width={110}
        />
    </div>
  );
}