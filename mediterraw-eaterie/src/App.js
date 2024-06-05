import React from 'react';

import { Chef, Find, Footer, Gallery, Header, Intro, SpecialMenu, } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Gallery />
    <Find />
    <Footer />
  </div>
);

export default App;



