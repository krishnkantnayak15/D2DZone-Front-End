import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import MenuBar from './components/menuBar'
import SignUp from './components/login/SignUp'

class App extends Component {
  render() {
    return (
      <div >
        <div >
        <img className="img-circle" src = "icon.jpeg" height="80" width="80"    />
        <h1 className="appHeading">Welcome in D2D Application</h1>
        </div>
        <a className = "logOut" href = "">SignOut</a>
         <MenuBar />
         <SignUp />
       
      </div>
    );
  }
}

export default App;
