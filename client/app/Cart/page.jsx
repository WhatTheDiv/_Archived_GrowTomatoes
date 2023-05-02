import './cart.css'
import Image from 'next/image'
import Image_default from '../Resources/images/tent.jpeg'
import Payment from '../Components/Payment/payment'

export default function CartPage(){
  const cart = [
    {
      title:'long tia;lksasdffdad dasf asfdsaf dsa  dsafdsa sdafdsafdsafsd dsaf dafdsa  dsafdsafdsfasdf fdsa fasdf sad fasdfsadfsadfasdfasdfsaf dasl;fkj asd;fklj sf;lkjasdf;l daskjf; laskjf ;dslkfj;lsakj ;sldfkj ',
      _id:0x1,
      price:78.87,
      quantity:1,
      img:Image_default
    },
    {
      title:'Filter',
      _id:0x2,
      price:41.50,
      quantity:2,
      img:Image_default
    },
    {
      title:'Fan',
      _id:0x3,
      price:13.22,
      quantity:3,
      img:Image_default
    }
  ]
  let sum = cart.reduce((total, curr) => {return total += (curr.price * curr.quantity) },0)
  const taxRate = 0.08652
  return (
    <div className="container_cart">
      <div className="cart_items">
        {
          cart.map( (item, index) => {
            const total = item.price * item.quantity
            return (<div key={index} className="cart_item">
              <span className='item_imgAndQty'>
                <Image className='item_img' src={item.img} width={50} height={50} alt={item.title} />
                <span className='item_quantity'>x {item.quantity}</span>
              </span>
              <span className='item_title'>{item.title }</span>
              <span className='item_price'>${item.price}</span>
            </div>)
          })
        }
        <div className="cart_subtotal">
          <span>Subtotal:</span>
          <span>${sum.toFixed(2)}</span>
        </div>
        <div className='cart_payment2'>
        something
      </div>
      </div>
      
      <div className="cart_totals">
        <div className='cart_tax'>
          <span>Subtotal:</span> 
          <span>${sum.toFixed(2)}</span> 
        </div>
        <div className='cart_tax'>
          <span>Tax:</span> 
          <span>${(sum * taxRate).toFixed(2)}</span> 
        </div>
        <div className='cart_total'>
          <span>Total:</span> 
          <span>${(sum + (sum*taxRate)).toFixed(2)}</span> 
        </div>
        <div className="cart_payment">
          <Payment/>
        </div>
      </div>
    </div>
  );
}