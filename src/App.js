import React from "react";
import Chat from "./components/chat.jsx";
import "./App.css";
import { VideoCall } from "./components/videoCall.jsx";
import WordList from "./components/wordsList.jsx";
import TextTransition from "./components/questions.jsx";
import Percentage from "./components/percentage.jsx";

function App() {
  return (
    <div className="App">
      <Chat />
       <VideoCall/>
       <WordList />
       <TextTransition/>
       <Percentage/>
    </div>
  );
}

export default App;
