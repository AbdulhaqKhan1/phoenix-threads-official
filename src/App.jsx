import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';
import TopTrending from './components/TopTrending';
import Contact from './components/Contact';
import OrderPage from './components/OrderPage';

function Home() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <TopTrending />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order/:id" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
