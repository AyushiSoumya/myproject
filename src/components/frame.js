import React from 'react';
import './frame.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
export default function Frame(props) {
    var len = (props.image).length - 1;
    var b = 0;


    return (

        <div className="frame_container" >
            <div id="frame" >
                <div id="left" onClick={() => {
                    let x = document.getElementById("frame");
                    let y = document.getElementById("content");
                    if (b === 0) {
                        b = len;
                        x.style.backgroundImage = `url(${require(`${props.image[b]}`)})`;


                    }
                    else {
                        b = b - 1;
                        x.style.backgroundImage = `url(${require(`${props.image[b]}`)})`;
                    }
                    y.innerHTML = `${props.heading[b]}`;


                }}>
                    <AiOutlineLeft /* size="100px" */ /></div>
                <a> <div id="content">{props.heading[b]}</div></a>
                <div id="right" onClick={() => {
                    let x = document.getElementById("frame");
                    let y = document.getElementById("content");
                    if (b === len) {
                        b = 0;
                        x.style.backgroundImage = `url(${require(`${props.image[b]}`)})`;
                    }
                    else {
                        b = b + 1;
                        x.style.backgroundImage = `url(${require(`${props.image[b]}`)})`;
                    }

                    y.innerHTML = `${props.heading[b]}`;

                }}> <AiOutlineRight /*  size="100px" */ /></div>
            </div>
        </div >
    )

}
