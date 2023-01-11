import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'
const Myorders = () => {
    const count = [1,2,3,4,5]
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {count.map((i) => (
              <tr kay={i}>
                <td>#sdkfsdfghjnfghj</td>
                <td>processing</td>
                <td>23</td>
                <td>2300</td>
                <td>online</td>
                <td>
                  <Link to={`/orders/${i}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
}

export default Myorders;