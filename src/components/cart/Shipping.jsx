import React from 'react'
import {Country, State} from 'country-state-city'

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Detail</h1>

        <form action="">
          <div>
            <label>House.No.</label>
            <input type="text" placeholder="please enter house no." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="please enter name of your city" />
          </div>
          <div>
            <label>Country</label>
            <select>
              {/* <option value="">Country</option> */}
              {Country && Country.getAllCountries().map((i) => (
                <option value={i.isoCode} key={i.isoCode}>
                  {i.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              {/* <option value="">Country</option> */}
              {State && State.getStatesOfCountry("US").map((i) => (
                <option value={i.isoCode} key={i.isoCode}>
                  {i.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>PIN code</label>
            <input type="text" placeholder="please enter PinCode" />
          </div>
          <div>
            <label>Phone No.</label>
            <input type="text" placeholder="please enter phone no." />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
}

export default Shipping;