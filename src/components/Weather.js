import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather(){
    useEffect(() => {
        axios.get(`https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`)
        .then(response => {
            console.log(response)
        })
    },[])
    return (null)
}