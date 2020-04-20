import React from "react";
import "./styleHeader.css"
import trollFace from "./trollFace.png"
function Headers(){
        return(
            <header>
                <img 
                src= {trollFace}
                alt="problem?"
                />
                <p>Meme Generator</p>
            </header>
        );
}

export default Headers;