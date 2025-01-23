import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Pricing from './components/Pricing';
import Clients from './components/Clients';
import Random from './components/Random';
import Faq from './components/Faq';
import Join from './components/Join';
import Footer from './components/Footer';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './Pages/Dashboard';
import ModelRoom from './Pages/ModelRoom';
import Purchases from './Pages/Purchases';
import Profile from './Pages/Profile';
import Files from './Pages/Files';
import GetStarted from './Pages/GetStarted';
import Support from './Pages/Support';
import Documentation from './Pages/Documentation';
import Login from './Pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Main />
            <About />
            <Pricing />
            <Clients />
            <Random />
            <Faq />
            <Join />
            <Footer />
          </>
        }/>

        {/* Dashboard with Nested Pages */}
        <Route path="/client" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="modelroom" element={<ModelRoom />} />
          <Route path='checkout' element={<Purchases/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='files' element={<Files/>}/>
          <Route path='getstarted' element={<GetStarted/>}/>
          <Route path='support' element={<Support/>}/>
          <Route path='documentation' element={<Documentation/>}/>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
