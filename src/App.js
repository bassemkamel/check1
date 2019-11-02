import React from 'react';
import logo from './logo.svg';
import pic from "./bk2.jpg";
import "./style.css"
import './App.css';


function App() {
  let firstName="bassem";
  let lastName="kamel";
  return (
    <div className="App">
      <header className="App-header">


                
          <div class="title">

          <h1 class="title red">My title</h1>

          <br></br>

          <img src="/bk.jpg" />

          <br></br>

          <img src="/bk.jpg" />


          </div>



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
