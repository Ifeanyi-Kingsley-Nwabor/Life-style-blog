import React, {useState, useEffect} from 'react';
//import { ContentfulClient, ContentfulProvider } from 'react-contentful';
import './App.css';
import { client } from './client';
import Posts from './components/Posts';
import NavBar from './components/NavBar'


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
          {/* <header className="App-header">
            <div className="wrapper">
              <span>Style <br />and <br />Kulture</span>
            </div>
          </header> */}
          <main>
            <div className="wrapper">
              {content && <Posts content={content}/>}
            </div>
          </main>
        </div>
      </div>
    );
  }
  
  


export default App;
