import React, { Suspense, lazy } from 'react';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Services from './components/Services';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const About = lazy(() => import('./components/About'));
const Booking = lazy(() => import('./components/Booking'));

function App() {
  return (
    <Router>
      <div className="App">
        <Hero />
        <Destinations />
        <Services />
        <section id="booking">
          <Suspense fallback={<div>Loading Booking...</div>}>
            <Booking />
          </Suspense>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
