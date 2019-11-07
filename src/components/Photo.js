import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard"

function Photo(){
    const [apod, setApod] = useState([]);
    const [newdate, setNewdate] = useState("2019-11-06");
    const [year, setYear] = useState(2019)
    const [month, setMonth] = useState(11)
    const [day, setDay] = useState(1)

    function Daypicker(choice){
        if (choice === 'today'){
            console.log (choice)
            const today = new Date();
            console.log (today)
            setYear(today.getFullYear())
            setMonth(today.getMonth()+1)
            setDay(today.getDate())
        }else if (choice === "prev"){
            console.log (choice, year, month, day)
            if (day === 1){
                setDay(30)
                setMonth(month-1)
                console.log ("month change", year, month, day)
            }else{
                setDay(day-1)
            }
        }else if (choice === "next"){
            console.log (choice, year, month, day)
            if (day === 30){
                setDay(1)
                setMonth(month+1)
                console.log ("month change", year, month, day)
            }else{
                setDay(day+1)
            }
        }
    }
    
    useEffect(() =>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=HVSGkBGaZvgpB4cw9vbTmCHy1yBgcbWAV03fMkv5&date=${year}-${month}-${day}`)
        .then(response =>{
            // console.log (response.data)
            setApod(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[year, month, day]);

    return (
        <div>
            <PhotoCard title={apod.title} date={apod.date} desc={apod.explanation} url={apod.url} />
            <div className="buttons">
            <button onClick={() => Daypicker("prev")}>Previous Day</button>
            <button onClick={() => Daypicker("today")}>Today</button>
            <button onClick={() => Daypicker("next")}>Next Day</button>

        </div>
        </div>
    )
}

export default Photo