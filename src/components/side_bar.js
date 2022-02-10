import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './side_bar.scss';
import { ImMenu } from "react-icons/im";
import { AiFillHome, AiFillCaretDown } from "react-icons/ai";
import { IoEarthSharp } from "react-icons/io5";
import { FiSmile } from "react-icons/fi";
import { MdAutoStories } from "react-icons/md";
import { AiOutlineAppstore, } from "react-icons/ai";
import { MdHelp } from "react-icons/md";
import { FaWindows } from 'react-icons/fa';

export default function Side_bar(props) {
    const [dropDownCounter, setDropdownCounter] = useState(0);
    const [width, setWidth] = useState(32);
    const togglemenu = () => {
        const a = document.getElementsByClassName('optionName');
        const b = document.getElementById('dropdownOptions');
        const c = document.querySelector('.container');
        var windowWidth = window.matchMedia("(max-width:768px)");

        if (width === 32) {
            setWidth(150);
            if (windowWidth.matches) {
                c.style.position = "absolute";
            }
            if (dropDownCounter == 1)
                b.style.position = 'static';
            for (let i = 0; i < a.length; i++) {
                a[i].style.display = 'inline-block';
            }
        }
        else {
            setWidth(32);
            if (windowWidth.matches) {
                c.style.position = "static";
            }
            if (dropDownCounter == 1)
                b.style.display = 'none';

            for (let i = 0; i < a.length; i++) {
                a[i].style.display = 'none';
            }
        }
    }
    function toggleDropdown() {
        const b = document.getElementById('dropdownOptions')
        const c = document.querySelector('.container');
        if (width == 150) {

            b.style.position = 'static';
            if (dropDownCounter == 0) {
                b.style.display = 'block';
                setDropdownCounter(1);
            }
            else {
                b.style.display = 'none';
                setDropdownCounter(0);

            }
        }
        else {
            if (dropDownCounter == 0) {
                b.style.position = 'absolute';
                b.style.display = 'block';
                setDropdownCounter(1);
            }
            else {
                setDropdownCounter(0);
                b.style.display = 'none';
            }
        }
    }


    return (

        <nav className="container" style={{ width: width }}>
            <div className="button">
                <button type="button" onClick={togglemenu} title={width === 32 ? "Open Menu" : "Close Menu"}><ImMenu /></button>
            </div><br />
            <div className="options">
                <div className="<option1">
                    <p>  <Link to="/" className="option" title={width === 32 ? "Home" : ""}><AiFillHome size="30px" /><span className="optionName">{props.option1}</span></Link></p>
                </div>
                <div className="option2">
                    <p>
                        <Link to='/destination' className="option" title={width === 32 ? "Destinations" : ""}>
                            <IoEarthSharp size="30px" /><span className="optionName"> Destinations</span>
                        </Link></p>
                </div>
                <div className="option3">
                    <p><a className="option" title={width === 32 ? "Reviews" : ""}><FiSmile size="30px" /><span className="optionName"> Reviews </span></a></p>
                </div>
                <div className="option4">
                    <p><a className="option" title={width === 32 ? "Blog" : ""}><MdAutoStories size="30px" /><span className="optionName">Blog
                    </span></a></p>


                </div>
                <div className="option5"  >
                    <p className="option " onClick={toggleDropdown} title={width === 32 ? "Categories" : ""}><AiOutlineAppstore size="30px" /><span className="optionName">Categories</span>
                        <AiFillCaretDown className="dropIcon" />
                    </p>
                    <ul id="dropdownOptions">
                        <li><a>Adventure</a></li>
                        <li><a>Wildlife and Nature</a></li>
                        <li><a>Mountain and Valleys</a></li>
                        <li><a>Beaches and Islands</a></li>
                        <li><a>Road Trips</a></li>
                        <li><a>Family Holiday</a></li>
                        <li><a>Art and Culture</a></li>
                        <li><a>Food and Drink</a></li>


                    </ul>

                </div>

                <div className="option6">
                    <p> <a className="option" title={width === 32 ? "Help" : ""}><MdHelp size="30px" /><span className="optionName">Help</span></a></p>
                </div>
            </div>
        </nav >


    )
}
