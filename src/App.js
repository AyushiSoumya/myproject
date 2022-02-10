import React from 'react';
import Navbar from './components/Navbar';
import Side_bar from './components/side_bar';
import './App.css';
import Home from './components/home';
import About from './components/about';
import OfficeLogin from './components/officeLogin';
import TravellersLogin from './components/travellersLogin';
import SignUp from './components/signup';
import Bottom from './components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Destination from './components/destination';


export default function App() {

  return (
    <>

      <Router>

        <Navbar quote="The Journey Is My Home" title="UP & AWAY" />
        <div className="main">
          <Side_bar option1="Home" />

          <Switch>

            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/about">

              <About />

            </Route>
            <Route exact path="/officeLogin">

              <OfficeLogin />

            </Route>
            <Route exact path="/travellersLogin">

              <TravellersLogin />

            </Route>
            <Route exact path="/signup">

              <SignUp />

            </Route>
            <Route exact path="/destination">

              <Destination />

            </Route>
          </Switch>

        </div>

        <Bottom />
      </Router>

    </>
  );
}

