import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Loading from "./Components/Loading";
import Rating from "./Rating"

function App() {
  const [appState, setAppState] = useState({
    loading: false,
    img: null,
    title: null
  });

  useEffect(() => {
    setAppState({ loading: true });
    let rand = Math.floor(Math.random() * 600);
    let url = "https://xkcd.com/"+rand+"/info.0.json";
    axios.get(url).then((respond) => {
      const apiImg = respond.data.img;
      const apiTitle = respond.data.title;
      setAppState({ loading: false, img: apiImg, title: apiTitle });
    });
  }, [setAppState]);

  return (
    <div className="App">
      <h1 >{appState.title}</h1>
      <img src={appState.img} alt="comic"></img>
      <div className="rate">
      <Rating />
      </div>
    </div>
  );
}


export default App;
