import React from 'react'

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <div>
          <h1>Order Details</h1>
          <p>
            <b>Address</b>
            {"qasedfwef 23-32ss sdfd"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Abhisheck"}
          </p>
          <p>
            <b>Phone</b>
            {123456789}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"23-12-2022"}
          </p>
          <p>
            <b>Delivered At</b>
            {"02-01-2023"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>payment Method</b>
            {"online"}
          </p>
          <p>
            <b>payment Reference</b>
            {"156468416849"}
          </p>
          <p>
            <b>Paid At</b>
            {"22-01-2022"}
          </p>
        </div>

        <div>
          <h1>Amount </h1>
          <p>
            <b>Items Total</b>
            {1235}
          </p>
          <p>
            <b>shipping Charges</b>
            {12}
          </p>
          <p>
            <b>GST Charges</b>
            {2}
          </p>
          <p>
            <b>Total Amount</b>
            {13584}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span>x<span>{1232}</span>
            </div>
            
          </div>

          <div>
            <h4>Veg-Cheese Burger</h4>
            <div>
              <span>{12}</span>x<span>{1232}</span>
            </div>
          </div>

          <div>
            <h4>Burger with tomato</h4>
            <div>
              <span>{12}</span>x<span>{1232}</span>
            </div>
          </div>

           <div>
            <h4 style={{fontWeight:800}}>sub total</h4>
            <div>{321621}</div>
          </div>
        </article>

      </main>
    </section>
  );
}

export default OrderDetails