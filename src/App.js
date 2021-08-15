import React from 'react';
import Header_menu from './components/Header_menu'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Bubble_sort from './components/Bubble_sort'
import Insertion_sort from './components/Insertion_sort'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(){
  return (<>
        <Router>
        <Header_menu />
        <Switch>
         <Route exact path="/Sorting-Visualizer">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/bubble_sort">
            <Bubble_sort />
          </Route>
          <Route exact path="/insertion_sort">
            <Insertion_sort />
          </Route>
        </Switch>
        </Router>
  </>);
}
export default App;