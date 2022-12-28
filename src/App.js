import React from "react";
import "./App.css";
import NewItem from "./Components/newItem";
import Item from "./Components/Item";
import { useSelector } from "react-redux";

function App() {
  const notes = useSelector((state) => state.notes);
  return (
    <div className="app-body">
      <div className="app-header"><h1>Birthdays of your friends</h1></div>
      <div className="items-grid">
        <NewItem />
        {notes.map((note) => (
          <Item itemProps={note} />
        ))}
      </div>
    </div>
  );
}

export default App;
