import Image from 'next/image'
import Image_Tent from '../../Resources/images/tent.jpeg'
import AddToCartButton from '../AddToCartButton/addToCartButton'
import './Product.css'

function Product() {
  return (
    <div className='container_product'>
      <Image className="product_image" priority src={Image_Tent} height={250} width={250} alt='product'/>
      <h3 className="product_title">Tent</h3>
      <p className="product_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, amet.</p>
      <span className='product_price'>
        <h3>$78.85</h3>
        <AddToCartButton />
      </span>
    </div>
  );
}

export default Product;

// name
// description
// price
// image
// action button