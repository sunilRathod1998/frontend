import React from 'react'

import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'
import {Link} from 'react-router-dom'

const CartItem = ({value, title, img, increament, decreament})=>(
    <div className="cartItem">
        <div>
            <h4>{title}</h4>
            <img src={img} alt="Item" />
        </div>
        <div>
            <button onClick={decreament}>-</button>
            <input type="number" value={value} />
            <button onClick={increament}>+</button>
        </div>
    </div>
)

const Cart = () => {
    const increament = ()=>{}
    const decreament = ()=>{}
  return (
    <section className='cart'>
        <main>
            <CartItem title={"cheese burger"} img={burger1} value={0} increament={()=>increament(1)} decreament={()=>decreament(1)}/>
            <CartItem title={"chicken cheese burger"} img={burger2} value={0} increament={()=>increament(2)} decreament={()=>decreament(2)}/>
            <CartItem title={"cheese burger chiken tikka"} img={burger3} value={0} increament={()=>increament(3)} decreament={()=>decreament(3)}/>

            <article>
                <div>
                    <h4>Sub Total</h4>
                    <p>{2000}</p>
                </div>
                <div>
                    <h4>Tax</h4>
                    <p>{2000*0.18}</p>
                </div>
                <div>
                    <h4>Shipping charges</h4>
                    <p>{200}</p>
                </div>
                <div>
                    <h4>Total</h4>
                    <p>{200+2000*0.18+2000}</p>
                </div>
                <Link to='/shipping'>Checkout</Link>
            </article>
        </main>
        
    </section>
  )
}

export default Cart