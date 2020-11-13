import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Loading from "./Components/Loading";

function App() {
  const [appState, setAppState] = useState({
    loading: false,
    img: null
  });

  useEffect(() => {
    setAppState({ loading: true });
    const url = "https://xkcd.com/620/info.0.json";
    axios.get(url).then((respond) => {
      const apiImg = respond.img;
      setAppState({ loading: false, img: apiImg });
    });
  }, [setAppState]);

  return (
    <div className="App">
      <h1></h1>
      <h2>Start editing to see some magic happen!</h2>
      <img src={appState.img} alt="comict" width="500" height="600"></img>
    </div>
  );
}


export default App;
