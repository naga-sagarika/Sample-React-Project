import logo from './logo.svg';
import './App.css';
import ReactBootstrap, {Navbar, Container, Carousel} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./";
import LoginMode from './Login';
import React, { useState } from 'react';
class App extends React.Component {
  constructor(props)
      {
        super(props);
        this.state = {isLoggedInUser:false};
        this.handleChange=this.handleChange.bind(this)
      }
      handleChange(e){
        this.setState({isLoggedInUser : e})
      }
 
  
  render(){ 
    const isLoggedInUser=this.state.isLoggedInUser;
    return (
    <div className="App">
      <div >
        <div >
        <div hidden={this.state.isLoggedInUser}>
        <h1> Hi , Please login to check</h1>

        </div>
        <div hidden={!this.state.isLoggedInUser}>
        <h1> Yayyyy!! You have logged in succesfully</h1>

        </div>
        </div>
<div >
       <Router>
        <Navigation />
         <Switch>
          {/* <Route path="/" exact component={() => <Home />} /> */}
          {/* <Route path="/about" exact component={() => <About />} /> */}
          {/* <Route path="/contact" exact component={() => <Contact />} /> */}
          <Route path="/login" exact component={() => <LoginMode isLoggedInUser={isLoggedInUser} onChange={this.handleChange}/> } />
        </Switch>
        {/* <Footer />  */}
      </Router>
      </div>
      </div>
    </div>
  );
  }
}

export default App;
