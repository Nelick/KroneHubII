import React from "react";
import "./App.css";

function Myinputs() {
  return <button>Login</button>;
}

function MyinputsII() {
  return <button>Register</button>;
}

const App = () => {
  return (
    <div>
      <h1>Krone Hub</h1>
      <Myinputs />
      <MyinputsII />
    </div>
  );
};

export default App;
