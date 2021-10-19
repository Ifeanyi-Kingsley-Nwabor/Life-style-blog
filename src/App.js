import React, {useState, useEffect} from 'react';
import './App.css';
import { client } from './client';
import { Switch, Route } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import Trending from './components/trendingNews/Trending';
import Contact from './components/Contact';
import NavBar from './components/NavBar'
import MyCarousel from './components/carousel/MyCarousel';






const App = () => {
const [content, setContent] = useState();


     useEffect(() => {
       client.getEntries()
       .then((data) => {
         setContent(data.items)
         console.log(data.items)
       })
       .catch(console.error)
     }, [])
  

    return (
      <div className="App">
        <div className="container">
          <div class><NavBar /></div>
          <MyCarousel />
          <Switch>
            <Route  path = '/about'>
              <About />
            </Route>
            <Route path = '/trending'>
              <Trending />
            </Route>
            <Route path = '/contact'>
              <Contact />
            </Route>
            <Route exact path = '/:id?'>
              <Home content={content}/>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
  
  


export default App;
