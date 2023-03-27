import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forside from './pages/Forside';
import Prisliste from './pages/Prisliste';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Omos from './pages/Omos';
import Nav from './components/Nav';
import Footer from './components/footer';
import AdminSide from './pages/admin/AdminSide';
import OpdateringsSide from './pages/admin/OpdateringsSide';
import OpretSide from './pages/admin/OpretSide';
import AdminBestillinger from './pages/admin/AdminBestillinger';
import OpdaterBestilling from './pages/admin/OpdaterBestilling';
import OpretBestilling from './pages/admin/OpretBestilling';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Forside/>}/>
        <Route path="/prisliste" element={<Prisliste/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path='/bestillinger' element={<AdminBestillinger/>}/>
        <Route path='/bestillinger/posts/:postId' element={<OpdaterBestilling/>}/>
        <Route path='/opretaftale' element={<OpretBestilling/>}/>
        <Route path="/omos" element={<Omos/>}/>
        <Route path="/admin" element={<AdminSide/>}/>
        <Route path="/admin/posts/:postId" element={<OpdateringsSide/>}/>
        <Route path="/create" element={<OpretSide/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
