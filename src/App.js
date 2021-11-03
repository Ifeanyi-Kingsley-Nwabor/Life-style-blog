import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import SocialFollow from "./components/SocialFollow";
import { Switch, Route } from "react-router";

import Home from "./components/Home";
import About from "./components/About";
import Trending from "./components/trendingNews/Trending";
import Authors from "./components/node_express/authors/Authors";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import MyCarousel from "./components/carousel/MyCarousel";

const App = () => {
  const [content, setContent] = useState();
  useEffect(() => {
    fetch("http://localhost:3004/api/posts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setContent(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div class>
          <NavBar />
        </div>
        <MyCarousel />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/authors">
            <Authors />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/:id?">
            <Home content={content} />
          </Route>
        </Switch>
        <SocialFollow />
        <Footer />
      </div>
    </div>
  );
};

export default App;
