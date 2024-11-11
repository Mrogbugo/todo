import React from "react";
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
function App() {
  return (
    <div className="App">
      <Todoinput />
      <Todolist />
    </div>
  );
}

export default App;
