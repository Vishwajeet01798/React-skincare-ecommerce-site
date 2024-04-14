import React from 'react';
import "./App.css";
import Header from './components/headers/Header';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import { Virtual } from 'swiper';
import Middle from './components/Middle/Middle';
import Products from './components/Products/Products';
import Testimonial from './components/Testimonials/Testimonial';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
 <Header/>
 <Hero/>
 <Slider/>
 <Middle/>
 <Products/>
 <Testimonial/>
 <Footer/>

    </div>
  );
}

export default App;
