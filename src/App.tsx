import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<MainPage></MainPage>}></Route>
            <Route path="/details/:id" element={<Details></Details>}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
