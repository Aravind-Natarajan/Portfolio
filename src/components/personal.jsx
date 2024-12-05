import React from 'react'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import './personal.css'

function personal() {
  return (
    <div class="personal-details" id="home">
        <div class="my-details">
            <a href="https://api.whatsapp.com/send/?phone=%2B918248152796&text&type=phone_number&app_absent=0" className="phone" target='_blank'>
                <IoCall title='(+91) 82481 52796'/>
                <p>(+91) 82481 52796</p>
            </a>
            <a href="mailto:aravind485528@gmail.com" className="email" target='_blank'>
                <MdEmail title='aravind485528@gmail.com'/>
                <p>aravind485528@gmail.com</p>
            </a>
            <a href="https://www.google.com/maps/place/35,+Tharanallur,+Pallakarai,+Tiruchirapalli,+Tiruchirappalli,+Tamil+Nadu+620001/@10.813606,78.6981928,95m/data=!3m1!1e3!4m6!3m5!1s0x3baaf50110151af5:0xaf2db4f9e36ea92!8m2!3d10.8136808!4d78.6986462!16s%2Fg%2F11q99y4kmd?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" className="location" target='_blank'>
                <IoLocationSharp title='No.34, II floor, Kurinjiyar st, Varaganeri, Trichy - 8'/>
                <p>No.34, II floor, Kurinjiyar st, Varaganeri, Trichy - 8</p>
            </a>
        </div>
        <div class="social-media-details">
            <a href="https://linkedin.com/in/aravind485528" className="s-icon" target='_blank'><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/___black.luvr___?igsh=MWIxc3hhYzExbDhyYg==" className="s-icon" target='_blank'><FaInstagram /></a>
            <a href="https://api.whatsapp.com/send/?phone=%2B918248152796&text&type=phone_number&app_absent=0" className="s-icon" target='_blank'><FaWhatsapp /></a>
            <a href="https://github.com/" className="s-icon" target='_blank'><IoLogoGithub /></a>
        </div>
    </div>
  )
}

export default personal


