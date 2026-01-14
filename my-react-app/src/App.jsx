import React from "react";
import "./App.css";

function Myinputs() {
  return <button>Login</button>;
}

function MyinputsII() {
  return <button>Register</button>;
}
function Mybullshit() {
  return <h1>Hello world</h1>;
}

const App = () => {
  return (
    <div>
      <h1>Krone Hub</h1>
      <Myinputs />
      <MyinputsII />
      <Mybullshit />
    </div>
  );
};

export default App;
