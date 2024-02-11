import React from "react";
import Home from "./pages/home";
import AddExercise from "./components/AddExercise";
import { ViewExercise } from "./components/ViewPrevious";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="AppName">
        <Home />
      </div>

      <AddExercise />
      <ViewExercise />
    </div>
  );
}

export default App;
