import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./News";
// import Footer from './components/Footer';
import Categories from "./components/Categories";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#f11946" progress={this.state.progress} />
        <Categories />
        <Routes>
          <Route index element={<News setProgress={this.setProgress} />} />
          <Route
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                category="general"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="business"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                key="health"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="science"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                key="sports"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                key="technology"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
