import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Calendar from './components/Calendar'
import EventsTemplate from './components/EventsTemplate'
import Favorites from './components/Favorites'
import Login from './components/Login'
import Profile from './components/Profile'
import Welcome from './components/Welcome'
import Navigation from './wrappers/Navigation'
import Register from './components/Register'
import Footer from './wrappers/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


// require('dotenv').config()
// const express = require('express')
// const cors = require('cors')


// const app = express()

// app.use(cors({
//     origin: "*"
// }))

function App() {

  return (
    <div>
      <Navigation component={Navigation}/>
      <div className="react-router-logic">
        <Switch>
          <Route path='/calendar' component={Calendar} />
          <Route path='/login' component={Login} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/profile' component={Profile} />
          <Route path='/register' component={Register} />
          <Route path='/eventstemplate' component={EventsTemplate} />
          <Route path='/' component={Welcome} />
        </Switch>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
