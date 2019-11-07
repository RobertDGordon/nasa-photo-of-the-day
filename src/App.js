import React from "react";
import "./App.css";
import Photo from "./components/Photo";
import styled from "styled-components";

const Header = styled.div`
  width: 80%;
  color: white;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <div className="App">
      <Header>
        <img className="App-logo" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="NASA Logo"></img>
        <div><h1>Astronomy Photo of the Day:</h1></div>
      </Header>
      <Photo />
    </div>
  );
}

export default App;
