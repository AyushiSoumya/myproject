import React from 'react'
import './footer.css';
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
export default function Bottom() {
    return (
        <div className="bottom" id="bottom">
            <div className="contact">
                <h2>CONTACT US:
                </h2>
                <a>upnaway@gmail.com</a>
                <h5>9912835987</h5>
            </div>
            <div id="follow">
                <h2>FOLLOW US ON:</h2>
                <a href="">   <AiFillTwitterCircle size="40px" title="Twitter" /></a>
                &nbsp;&nbsp;
                <a href=""><AiFillInstagram size="40px" title="Instagram" /></a>
                &nbsp;&nbsp;
                <a href=""><FaFacebook size="35px" title="Facebook" /></a>
                &nbsp;&nbsp;
                <a href=""><AiFillYoutube size="40px" title="Youtube" /></a>
                &nbsp;&nbsp;
                <a href="">< AiFillLinkedin size="40px" title="Linkedin" /></a>
            </div>

        </div>
    )
}
