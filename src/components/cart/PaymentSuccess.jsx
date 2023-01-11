import React from 'react'
import {Link} from 'react-router-dom'
const PaymentSuccess = () => {
  return (
    <section className='paymentSuccess'>
        <main>
            <h1>Order Confirmed</h1>
            <p>Order placed successfully, you can check order status below</p>
            <Link to='./myorders'>Cheack status</Link>
        </main> 
        
    </section>
  )
}

export default PaymentSuccess