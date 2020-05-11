import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import GalleryPage from './pages/GalleryPage';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/about" exact component={AboutPage}/>
          <Route path="/news" exact component={NewsPage}/>
          <Route path="/gallery" exact component={GalleryPage}/>
          <Route path="/login" exact component={LoginPage}/>
          <Route path="/" render={() => <div>404</div>}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
