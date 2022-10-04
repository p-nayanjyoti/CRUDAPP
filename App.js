import "./App.css";
import ReactDOM from "react-dom/client";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import React from "react";
import {  BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<Update />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;