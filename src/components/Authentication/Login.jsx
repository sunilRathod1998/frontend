import React from 'react'
import {motion} from 'framer-motion'
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
  return (
    <section className="login" option>
      <motion.button initial={{y:"-100vh"}} animate={{y:0}}>
        Login with google <FcGoogle />
      </motion.button>
    </section>
  );
}

export default Login