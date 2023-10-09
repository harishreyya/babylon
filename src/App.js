import React from "react";
import Chat from "./components/chat.jsx";
import "./App.css";
import { VideoCall } from "./components/videoCall.jsx";
import WordList from "./components/wordsList.jsx";
import TextTransition from "./components/questions.jsx";
import Percentage from "./components/percentage.jsx";
import CircularProgressBar from "./components/circlualrProgressbar.jsx";
import { Header } from "./components/header.jsx";
import { BodyContainer } from "./components/bodyContainer.jsx";

function App() {
  return (
    <div className="App">
       <Header/>
       <BodyContainer/>
       {/* -------- */}
     
     
    </div>
  );
}

export default App;
