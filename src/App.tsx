import React from "react";
import { signin } from "./service";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button
        onClick={async () => {
          await signin({ email: "arlo@arlo.com", password: "arlotheper" });
        }}
      >
        Sign In
      </button>
    </div>
  );
}

export default App;
