import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./News";

import Categories from "./components/Categories";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  const [state, setState] = useState({
    progress: 0,
  });
  const { progress } = state;

  const setProgress = (progress) => {
    setState({ progress: progress });
  };

  const goToTop = () => {
    window.scrollTo(0, 0);
  };
// eslint-disable-next-line
  let visible = false;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      visible = true;
      document.getElementById("scrollTop").style.display = "block";
    } else {
      visible = false;
      document.getElementById("scrollTop").style.display = "none";
    }
  });
  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar color="#f11946" progress={progress} />
      <Categories />
      <button
        id="scrollTop"
        className="btn btn-sm font-semibold hover:bg-[#68FE9A] hidden fixed right-5 z-50 bottom-5 bg-[#68FE9A]"
        onClick={goToTop}
      >
        Back to top &uarr;
      </button>
      <Routes>
        <Route index element={<News setProgress={setProgress} />} />
        <Route
          path="/"
          element={
            <News setProgress={setProgress} key="general" category="general" />
          }
        />
        <Route
          path="/general"
          element={
            <News setProgress={setProgress} key="general" category="general" />
          }
        />
        <Route
          path="/business"
          element={
            <News
              setProgress={setProgress}
              key="business"
              category="business"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              key="entertainment"
              category="entertainment"
            />
          }
        />
        <Route
          path="/health"
          element={
            <News setProgress={setProgress} key="health" category="health" />
          }
        />
        <Route
          path="/science"
          element={
            <News setProgress={setProgress} key="science" category="science" />
          }
        />
        <Route
          path="/sports"
          element={
            <News setProgress={setProgress} key="sports" category="sports" />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              key="technology"
              category="technology"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
