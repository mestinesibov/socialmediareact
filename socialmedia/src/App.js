import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';


import Navbar from './components/layouts/Navbar';
// import Footer from './components/layouts/Footer';
// React Router Import
import {Switch, Route } from 'react-router-dom';
// Import Pages
import Home from './components/pages/Home';
import Books from './components/pages/Books';
import Contacts from './components/pages/Contacts';
import Profile from './components/pages/Profile';
import NotFoundPage from './components/pages/NotFoundPage';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFoundPage} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
