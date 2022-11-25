import React from 'react';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import AddPage from './Pages/add-new-page';
import HomePageWrapper from './Pages/Homepage';
import DetailPageWrapper from './Pages/detail-page';
 
 
function App() {
  return (

    
    <div className="app-container">
      <header >
        <h1>Aplikasi Kontak</h1>
        <Navigation />
      </header>
      <main className='homepage'>
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/detail/:id" element={<DetailPageWrapper />} />
        </Routes>
      </main>
    </div>
  );
}
 
export default App;