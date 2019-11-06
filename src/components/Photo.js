import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard"

function Photo(){
    const [apod, setApod] = useState([]);
    const [day, setDay] = useState("2019-11-06");

    function Daypicker(){

    }
    
    useEffect(() =>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${day}`)
        .then(response =>{
            // console.log (response.data)
            setApod(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[day]);

    return (
        <div>
            <PhotoCard title={apod.title} date={apod.date} desc={apod.explanation} url={apod.url} />
            <div className="buttons">
            <button onClick={() => setDay("2019-11-05")}>Previous Day</button>
            <button onClick={() => setDay("2019-11-06")}>Today</button>
            <button onClick={() => setDay("2019-11-07")}>Next Day</button>

        </div>
        </div>
    )
}

export default Photo