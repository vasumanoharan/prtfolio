import React from 'react';
import ReactDOM from 'react-dom/client';
import  './style.css'
import Navbar from './navbar'
import About  from './about';
import Project from './project';
import Skill from './skill';
import Footer from './footer'
const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div>
    <Navbar></Navbar>
    <About></About>
    <Project></Project>
    <Skill></Skill>
    <Footer></Footer>
  </div>
)