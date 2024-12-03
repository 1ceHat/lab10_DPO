import React from "react";
import "./Choice.css";

function Choice (props) {
    return(
        <div className="choice-box">
            <img src={props.image}/>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default Choice;