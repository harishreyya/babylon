import React from "react";
import Chat from "./components/chat.jsx";
import "./App.css";
import { VideoCall } from "./components/videoCall.jsx";
import WordList from "./components/wordsList.jsx";

function App() {
  return (
    <div className="App">
      {/* <h1>Typewriter Chat</h1> */}
      <Chat />
       <VideoCall/>
       <WordList />
    </div>
  );
}

export default App;
