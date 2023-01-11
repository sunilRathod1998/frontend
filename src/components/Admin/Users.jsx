import React from 'react'
import me from "../../assets/john_cena.jpg";

const Users = () => {
    const arr = [1,2,3,4]
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr kay={i}>
                <td>#sdkfsdfghjnfghj</td>
                <td>Abhishek</td>
                <td>
                  <img src={me} alt="" />
                </td>
                <td>Admin</td>
                <td>{"23-02-2022"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
}

export default Users