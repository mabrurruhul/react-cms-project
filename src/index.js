import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Testimonial from './Pages/Testimonial';
import Team from './Pages/Team';
import NoPage from './Pages/NoPage';
import HeadFoot from './includes/HeadFoot';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeadFoot />}>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/testimonial" element={<Testimonial />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>

//   <React.StrictMode>
//     <Home/>
//  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
