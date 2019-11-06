import React from "react";

function PhotoCard(props){

    return (
        <div className="image-card">
            <img src={props.url} alt="Astronomy Phot of the Day" />
            <h1>{props.title}</h1>
            <h2>Date: {props.date}</h2>
            <p>{props.desc}</p>
        </div>
    )
}

export default PhotoCard