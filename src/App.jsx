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
    //Si la aplicacion no muestra imagen es debido al protocolo CORS, porfavor comentar la linea de arriba y descomentar las de pokemon 
    //Para demostrar que la aplicacion web aun consume recursos de APIs 

    //let url = "https://pokeapi.co/api/v2/pokemon/"+rand+"/";
    //let apiImg = "https://pokeres.bastionbot.org/images/pokemon/"+rand+".png"
    axios.get(url).then((respond) => {
      const apiImg = respond.data.img;
      const apiTitle = respond.data.title;
      //Si la aplicacion no muestra imagen es debido al protocolo CORS, porfavor comentar las dos lineas de arriba y descomentar las de pokemon 
      //Para demostrar que la aplicacion web aun consume recursos de APIs 
      
      //const apiTitle = respond.data.name;
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
