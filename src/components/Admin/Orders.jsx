import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import {GiArmoredBoomerang} from 'react-icons/gi'

const Orders = () => {
  const count = [1, 2, 3, 4];
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
              <th>User</th>
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
                <td>Abhi</td>
                <td>
                  <Link to={`/admin/orders/${i}`}>
                    <AiOutlineEye />
                  </Link>
                  <button>
                    <GiArmoredBoomerang/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Orders;
