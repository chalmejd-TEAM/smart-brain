import React from "react";
import Tilt from "react-parallax-tilt";
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="br2 shadow-2">
                <div className="Tilt pa3">
                    <img src={brain} alt="Logo"/>
                </div>
            </Tilt>
        </div> 
    );
}

export default Logo;