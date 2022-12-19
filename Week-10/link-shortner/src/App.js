import React from "react";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { MainContainer } from "./Components/MainContainer/MainContainer";

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
