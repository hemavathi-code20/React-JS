import React from "react";

import {
  About,
  Chef,
  Find,
  Footer,
  PhotoGallery,
  Header,
  Home,
  Laurels,
  SpecialMenu,
} from "./Container";
import { Navbar } from "./Components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <About />
    <SpecialMenu />
    <Chef />
    <Home />
    <Laurels />
    <PhotoGallery />
    <Find />
    <Footer />
  </div>
);

export default App;
