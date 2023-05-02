'use client'
import './payment.css'

export default function PaymentSection(){
  function submitFunc(e){
    e.preventDefault()
    console.log('clicked')
  }
  return (
    <div className='container_payment'>
      <form onSubmit={ e => submitFunc(e) }>
        <h1 className='payment_header' >Mailing Address</h1>
        <span>
          <label htmlFor="name">Full Name:</label>
          <input type="text" name='name' />
        </span>
        <span>
          <label htmlFor="address1">Address Line 1:</label>
          <input type="text" name='address1' />
        </span>
        <span>
          <label htmlFor="address2">Address Line 2:</label>
          <input type="text" name='address2' />
        </span>
        <span>
          <label htmlFor="city">City:</label>
          <input type="text" name='city' />
        </span>
        <span>
          <label htmlFor="state">State:</label>
          <input type="text" name='state' />
        </span>
        <span>
          <label htmlFor="zip">ZIP/Postal Code:</label>
          <input type="text" name='zip' />
        </span>
        
        <h1 className='payment_header' >Billing Address</h1>

        <div className='payment_sameAsAbove'>
          <label htmlFor="sameAs">Same as mailing address</label>
          <input type="checkbox" />
        </div>
        <span>
          <label htmlFor="address1">Address Line 1:</label>
          <input type="text" name='address1' />
        </span>
        <span>
          <label htmlFor="address2">Address Line 2:</label>
          <input type="text" name='address2' />
        </span>
        <span>
          <label htmlFor="city">City:</label>
          <input type="text" name='city' />
        </span>
        <span>
          <label htmlFor="state">State:</label>
          <input type="text" name='state' />
        </span>
        <span>
          <label htmlFor="zip">ZIP/Postal Code:</label>
          <input type="text" name='zip' />
        </span>

        <h1 className='payment_header' >Payment Details</h1>

        <span>
          <label htmlFor="cardholderName">Card holder Name:</label>
          <input type="text" name='cardholderName' />
        </span>
        <span>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="number" name='cardNumber' />
        </span>
        <span>
          <label htmlFor="expDate">Expiration Date:</label>
          <input type="number" name='expDate' />
        </span>
        <span>
          <label htmlFor="cvv">Cvv:</label>
          <input type="number" name='cvv' />
        </span>
        <div className="payNow">
          <input type="submit" value='Pay Now'/>
        </div>


      </form>
    </div>
  );
}