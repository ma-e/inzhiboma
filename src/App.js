import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import News from "./News";
import Publication from "./Publication";
import Projects from "./Projects";
import Leadership from "./Leadership";
import SportAndMusic from "./SportAndMusic";
import Footer from "./Footer";

const App = () => {
 return (
  <>
   <Router>
     <Navbar />
     <main className="main-content">
      
       <Routes>
         <Route path="/publications" element={<Publication />} />
         <Route path="/" element={<News />} />
         <Route path="/leadership" element={<Leadership />} />
         <Route path="/sportmusic" element={<SportAndMusic/>} />
         <Route path="/projects" element={<Projects />} />
       </Routes>
     </main>
   </Router>
   <Footer />
   </>
  
  
 );
};

export default App;