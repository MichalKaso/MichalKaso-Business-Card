import React from "react";
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';




export default function Footer() {
    return(
        <footer className="footer-section">

            <div>
               <a className="twitter" href="https://twitter.com/?lang=en">< FaTwitter /></a>
               <a className="facebook" href="https://www.facebook.com/"><FaFacebook /></a>
               <a className="instagram" href="https://www.instagram.com/mike_kaso/?hl=en"><FaInstagram /></a>
               <a className="github" href="https://github.com/MichalKaso"><FaGithub /></a>
            </div>
            
        </footer>
    )
}


