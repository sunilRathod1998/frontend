import React from 'react'
import {motion} from 'framer-motion'
import burger from '../../assets/burger1.png'

const Contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2>Contact Us</h2>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <textarea
          id="textarea"
          placeholder="Message..."
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Send</button>
      </motion.form>
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="formBorder"
      >
        <motion.div
          initial={{ 
          y: "-100vh",
          x: "50%",
          opacity: 0 }}
          animate={{ x:" 50%", y:"-50%", opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <img src={burger} alt="burger" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;