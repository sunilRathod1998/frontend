import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

import me from '../../assets/john_cena.jpg';
import {MdDashboard} from 'react-icons/md'

const Profile = () => {
    const options = {
        initial:{y:"-100%",
        opacity:0},
        animate:{
            y:0,
            opacity:1
        }

    }
  return (
    <section className="profile">
      <main>
        <motion.img src={me} {...options} />
        <motion.h5 {...options} transition={{ delay: 0.3 }}>John Cena</motion.h5>
        <motion.div {...options} transition={{ delay: 0.3 }}>
          <Link to="/founder" style={{borderRadius:0, backgroundColor:"rgb(45,45,45)"}}> <MdDashboard/>  Dashboard</Link>
        </motion.div>
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/myorders">Orders</Link>
        </motion.div>
        <motion.button
          nitial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3}}>
          LogOut
        </motion.button>
      </main>
    </section>
  );
}

export default Profile;