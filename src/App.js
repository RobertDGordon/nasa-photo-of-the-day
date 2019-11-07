import React from "react";
import "./App.css";
import Photo from "./components/Photo";
import NavMenu from "./components/NavMenu"
import styled from "styled-components";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
 
library.add(faBars)


const Header = styled.div`
  width: 60%;
  color: white;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function App() {
  return (
    <div className="App">
      <Header>
        <img className="App-logo" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="NASA Logo"></img>
        <div><h1>Astronomy Photo of the Day:</h1></div>
        <NavMenu />
      </Header>
      <Photo />
    </div>
  );
}

export default App;
