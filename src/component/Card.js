import React, {useState} from 'react';
import MatchCardGame from "./MatchCardGame";

function Card(props) {
    const url = props.url;

    return (
        <div className={"card-container"}>
            <img src={url}/>
        </div>
    );
}

export default Card;