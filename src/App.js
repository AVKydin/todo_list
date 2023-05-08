import './App.css';
import {Header} from "./components/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Monday} from "./components/monday/Monday";
import {Sunday} from "./components/sunday/Sunday";
import {Saturday} from "./components/saturday/Saturday";
import {Friday} from "./components/friday/Friday";
import {Thursday} from "./components/thursday/Thursday";
import {Wednesday} from "./components/wednesday/Wednesday";
import React from "react";
import {Tuesday} from "./components/tuesday/Tuesday";

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
