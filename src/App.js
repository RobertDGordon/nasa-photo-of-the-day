import React, {useState} from "react";
import "./App.css";
import Photo from "./components/Photo"

function DateInput(){
  const [dateChange, setDateChange] = useState("")
  return (
    <div>

    </div>
  )
}

function App() {
  return (
    <div className="App">
        <div><p>Astronomy Photo of the Day:</p></div>
        <Photo />
    </div>
  );
}

export default App;
