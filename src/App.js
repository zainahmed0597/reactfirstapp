import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";
import "./pricing.css";
import MyFooter from "./MyFooter";
import MyBody from "./MyBody";
import MyHeader from "./MyHeader";

function App() {
  return (
    <div>
      <body>
        <MyHeader />
        <MyBody />
        <MyFooter />
      </body>
    </div>
  );
}

export default App;
