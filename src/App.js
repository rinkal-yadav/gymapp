import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//component import
import Header from './components/Header';
import Gyms from './components/category/Gyms';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<Gyms />} />
          
          <Route path='/gyms' element={<Gyms />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
