import React from 'react'
import { Link } from 'react-router-dom'
import { RiFindReplaceLine } from 'react-icons/ri'
import me from '../../assets/john_cena.jpg'
import Loader from '../Loader'

const About = () => {
  const loading = false;
  return (
    <section className='about'>
      {loading === false ? <main>
        <h1>About Us</h1>

        <article>
          <h4>MBA Burger Wala</h4>
          <p>
            We are MBA Burger Wala. The place where burger on the entire earth.
          </p>
          <p>
            Explore the various types of food and burgers. click below to see
            the menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="" />
              <h3>John Cena</h3>
            </div>
            <p>I am John Cena the founder of MBA Burger Wala Affiliated to good taste... </p>
          </article>
        </div>
      </main>:<Loader/>}
    </section>
  );
}

export default About