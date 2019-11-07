import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard"

export default function Weather(){
    // const [days, setDays] = useState([])
    // const [daykeys, setDaykeys] = useState ([])
    // useEffect(() => {
    //     axios.get(`https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`)
    //     .then(response => {
    //         // console.log(response.data)
    //         {for (let key in response.data){
    //             // console.log (response.data[key].AT)
    //             days.push(response.data[key])
    //         }}
    //         // setDays(response.data)
    //         setDaykeys(response.data.sol_keys)
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     })
    // },[])
    return (null
        // <div className="cards">
        //     {/* {console.log("days here",days)} */}
        //     <div className="card">
        //     {days.map((day, index) => {
        //          console.log (index, day)
        //         })}
        //     </div>
        // </div>
        // <div className="conatainer">
        //     {/* {console.log ("days here",days.328)} */}
        //     <div className="card">
        //         {/* {console.log (days[key])} */}
        //         {/* {Object.keys(days).forEach(function(key,index){
        //             console.log (index, key.AT)
        //         })} */}
        //         {/* {days.map((day, index) =>{
        //             return <WeatherCard key={index} day={index} avtemp={day.AT.av} lowtemp={day.AV.mn} hightemp={day.AV.mx} />
        //         })} */}
        //     </div>
        // </div>
    );
}