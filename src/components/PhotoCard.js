import React from "react";

function PhotoCard(props){

    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.url} alt="Astronomy Photo of the Day" />
            <p>{props.date}</p>
            <p>{props.desc}</p>

        </div>
    )
}

export default PhotoCard