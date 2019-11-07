import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import styled from "styled-components"

const PhotoButton = styled.button`
    width: 100px;
    height: 30px;
    margin: 5px;
    background-color: #e3e3e3;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 1px 1px black;
    transition: all 0.3s;
    &:hover{
        background-color: #808c83;
    }
`



function Photo(){
    const [apod, setApod] = useState([]);
    // const [newdate, setNewdate] = useState("2019-11-06");
    const [year, setYear] = useState(2019)
    const [month, setMonth] = useState(3)
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
                if(month === 3){
                    setDay(28)
                }else if (month === 4 || month === 6 || month === 9 || month === 11){
                    setDay(31)
                }else{
                    setDay(30)
                }
                setMonth(month-1)
                console.log ("month change")
            }else{
                setDay(day-1)
            }
        }else if (choice === "next"){
            console.log (choice, year, month, day)
            if(day === 28 && month === 2){
                setDay(1)
                setMonth(month+1)
                console.log ("month change")
            }else if (day === 30 && (month === 4 || month === 6 || month === 9 || month === 11)){
                setDay(1)
                setMonth(month+1)
                console.log ("month change")
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
            <PhotoButton onClick={() => Daypicker("prev")}>Previous Day</PhotoButton>
            <PhotoButton onClick={() => Daypicker("today")}>Today</PhotoButton>
            <PhotoButton onClick={() => Daypicker("next")}>Next Day</PhotoButton>

        </div>
        </div>
    )
}

export default Photo