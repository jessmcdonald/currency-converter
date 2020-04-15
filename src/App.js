import React from "react";
import "./App.css";
import Converter from "./components/converter/Converter";
import History from "./components/history/History";

function App() {
  return (
    <div className="App">
      <Converter />
      <History />
    </div>
  );
}

export default App;
