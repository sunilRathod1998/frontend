import React from 'react'
import {motion} from 'framer-motion'
import me from '../../assets/john_cena.jpg'


const Founder = () => {
  const options = {
    initial:{x:"100%", opacity:0},
    whileInView:{x:"0", opacity:1}
  };
  return (
    <section className='founder'>
        <motion.div {...options} transition={{delay:0.4}}> 
            <img src={me} alt="Founder" width={200 } height={200} />
            <h3>John Cena</h3>
            <p>
              Hey, Everyone I am John Cena, the founder of MBA BURGERWALA.
              <br />
              Our aim is to create the most tasty burger on the planet earth.
            </p>
        </motion.div>
    </section>
  )
}

export default Founder