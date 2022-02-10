import React from 'react';
import { AiOutlineDownCircle } from 'react-icons/ai';
import "./card.scss";
export default function card(props) {

    return (

        <div className="card_box" >

            <div className="img_box">
                <img className="img" src={props.image} />
            </div>
            <div className="card_body">
                <div>
                    <h5>{props.title}</h5>

                </div>
                <div>
                    <p>{props.body}</p>
                </div>
            </div>
            <div className="view_more">
                <a> View Article&nbsp;<AiOutlineDownCircle /></a>
            </div>
        </div>

    )
}