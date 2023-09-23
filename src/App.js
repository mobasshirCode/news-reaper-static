import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";
import General from "./assets/general.json";
import Business from "./assets/business.json";
import Entertainment from "./assets/entertainment.json";
import Health from "./assets/health.json";
import Science from "./assets/science.json";
import Sports from "./assets/sports.json";
import Technology from "./assets/technology.json";

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_API1;
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);
  if (mode === "light") {
    document.body.style.backgroundColor = "#d4ddfa";
  }
  let toggle = () => {
    console.log("toggle clicked");
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#162533";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#d4ddfa";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleBtn={toggle} />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                mode={mode}
                navKey={General}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                category="general"
              />
            }
          ></Route>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                mode={mode}
                navKey={Business}
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                mode={mode}
                navKey={Entertainment}
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                mode={mode}
                navKey={General}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                mode={mode}
                navKey={Health}
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                mode={mode}
                navKey={Science}
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                mode={mode}
                navKey={Sports}
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                mode={mode}
                navKey={Technology}
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
