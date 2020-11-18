import React from 'react'
import Header from '../src/header/Header.jsx'
import Footer from '../src/footer/Footer.jsx'
import MyNavbar from '../src/nav/Navbar.jsx'
import MenuNav from '../src/nav/Navigation.jsx'
import BedRooms from '../src/pages/Bedrooms.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'



function App() {
  return (
    <div className="App">
      <Header />
      <MyNavbar />
      <MenuNav />
      <BedRooms />
      <Footer />
    </div>
  );
}

export default App;
