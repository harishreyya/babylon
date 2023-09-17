import React from "react";
import Chat from "./components/chat.jsx";
import "./App.css";
import { VideoCall } from "./components/videoCall.jsx";
import WordList from "./components/wordsList.jsx";
import TextTransition from "./components/questions.jsx";
import Percentage from "./components/percentage.jsx";
import CircularProgressBar from "./components/circlualrProgressbar.jsx";
import { Header } from "./components/header.jsx";

function App() {
  return (
    <div className="App">
       <Header/>
      <Chat />
       <VideoCall/>
       <WordList />
       <TextTransition/>
       <Percentage/>
        <CircularProgressBar percentage={75}/>
     
    </div>
  );
}

export default App;
