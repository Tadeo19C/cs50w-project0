// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import about from './components/about';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import DietTypes from './components/DietTypes';
import FitnessDiet from './components/FitnessDiet';
import Layout from './components/Layout';
import Services from './components/Services';
import SimpleDiet from './components/SimpleDiet';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={about} />
          <Route path="/carousel" component={Carousel} />
          <Route path="/contact" component={Contact} />
          <Route path="/diet-types" component={DietTypes} />
          <Route path="/fitness-diet" component={FitnessDiet} />
          <Route path="/services" component={Services} />
          <Route path="/simple-diet" component={SimpleDiet} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
