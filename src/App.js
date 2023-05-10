import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Header} from "./components/header";
import {Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday} from "./components/daysOfTheWeek";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Header/>}>
              <Route path={'monday'} element={<Monday/>}></Route>
              <Route path={'tuesday'} element={<Tuesday/>}></Route>
              <Route path={'wednesday'} element={<Wednesday/>}></Route>
              <Route path={'thursday'} element={<Thursday/>}></Route>
              <Route path={'friday'} element={<Friday/>}></Route>
              <Route path={'saturday'} element={<Saturday/>}></Route>
              <Route path={'sunday'} element={<Sunday/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
