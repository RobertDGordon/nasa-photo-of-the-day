import React from "react";
import styled from "styled-components"

const ImageCard = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 85vh;
  overflow: auto;
  background-color: grey;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px black;
}
`

const ImageDisplay = styled.img`
    margin-top: 10px;
    width:400px;
    box-shadow: 2px 2px black;
    transition: all 0.3s;
    &:hover{
        transform: scale(1.4)
    }
`

function PhotoCard(props){

    return (
        <ImageCard>
            <ImageDisplay src={props.url}></ImageDisplay>
            {/* <img src={props.url} alt="Astronomy Phot of the Day" /> */}

            <h1>{props.title}</h1>
            <h2>Date: {props.date}</h2>
            <p>{props.desc}</p>
        </ImageCard>
    )
}

export default PhotoCard