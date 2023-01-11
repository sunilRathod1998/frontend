import React from 'react'
import {Link} from 'react-router-dom'
import { AiFillInstagram, AiFillYoutube, AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>
               MBA Burger Wala
            </h2>
            <p>
                we are trying to give you the best taste possible
            </p>
            <br />
            <em>we give attention to genuine feedback</em>
            <strong>All Right Reserved @mbaburgerwala</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <Link to="www.youtube.com"><AiFillYoutube/></Link>
            <Link to="www.instagram.com"><AiFillInstagram/></Link>
            <Link to="www.github.com"><AiFillGithub/></Link>
        </aside>
    </footer>
  )
}

export default Footer