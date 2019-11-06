import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard"

function Photo(){
    const [apod, setApod] = useState([]);
    
    useEffect(() =>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response =>{
            // console.log (response.data)
            setApod(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[]);

    return (
        <div>
            <PhotoCard title={apod.title} date={apod.date} desc={apod.explanation} url={apod.url} />
        </div>
    )
}

export default Photo