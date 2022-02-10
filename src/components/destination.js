import React from 'react';
import './destination.scss';
import Frame from './frame.js';
export default function Destination() {
    let a = ['./pic2.PNG', './background.jpg', './pic4.PNG', './pic3.PNG'];
    let b = ["~Destinations~", "Andamans", "Valley Of Flowers", "Jim Corbett"];
    return (
        <div className="destination_container">
            <Frame image={a} heading={b}></Frame>
        </div>

    )
}

