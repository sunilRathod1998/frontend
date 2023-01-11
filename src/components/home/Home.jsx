import React from 'react'
import Founder from './Founder'
import {motion} from 'framer-motion'
import Menu from './Menu'

const Home = () => {
  const options = {
    initial:{x:"-100%",
    opacity:0
    },
    whileInView:{x:"0", opacity:1}
  }
  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...options}>MBA BURGER WALA</motion.h1>
          <motion.p {...options} transition={{ delay: 0.4 }}>
            Give Yourself Testy Burger
          </motion.p>
        </div>
        <motion.a
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          href="#menu"
        >
          explore menu
        </motion.a>
      </section>
      <Founder />
      <Menu/>
    </>
  );
}

export default Home