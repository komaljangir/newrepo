import logo from './logo.svg';
import './App.css';
import Header from "./Component/Header";
import Aboutus from "./Component/About us";
import Home from "./Component/Home";
import { Component } from 'react';
import Services from "./Component/Services";
import Project from "./Component/Project";
import Skills from "./Component/Skills";
import PublicRoutes from "./PublicRoutes";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
 <>

 <BrowserRouter>
 <PublicRoutes/>
 </BrowserRouter>
 </>
  );
}

export default App;
