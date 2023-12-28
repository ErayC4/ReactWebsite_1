import "./App.css";
import Padding from './Padding.jsx';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import React, { useState } from 'react';

function App() {
  Padding({ targetIds: ["navbar", "footer"] });

  return (
    <div>
      <Navbar>
        
      </Navbar>

      <Footer />

    </div>
  );
}

export default App;
