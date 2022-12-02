import React, { useState,useEffect } from 'react';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import AddPage from './Pages/add-new-page';
import DetailPageWrapper from './Pages/detail-page';
import LoginPage from './Pages/LoginPage';
import { putAccessToken,getUserLogged } from './utils/api';
import Register from './Pages/Register';
import HomePageWrapper from './Pages/Homepage';
import { ThemeProvider } from './CustomHook/ThemeContext';
import ToggleModes from './CustomHook/ToggleMode';






 
 
function App() {
  const [authedUser,setauthedUser] = useState(null);

  const [mode,setMode] = React.useState("light")
  
  const toggleMode = () => {
    setMode((prevMode) => {
      return prevMode === 'light' ? 'dark' : 'light';
    });
  };
  
useEffect(() => { 
    const { data } =getUserLogged();
    setauthedUser(data)
  }, []  );


  const onLogout=()=> {
    setauthedUser(null)
    putAccessToken('');
  }
  const onLoginSuccess= async({ accessToken })=> {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
 
    setauthedUser(data)
}


if(authedUser=== null){
  return (

  
    
    <div className="app-container">
      <header >
        <h1>Aplikasi Kontak</h1>
      </header>
      <main className='homepage'>
        <Routes>
        <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess}/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
    


  );
}
else{
  return(
    <ThemeProvider value={[mode,toggleMode]}>
    <div className="app-container">
      <header >
        <h1>Aplikasi Kontak</h1>
        <Navigation logout={onLogout}/>
        <ToggleModes/>
      </header>
      
      <main className='homepage'>
        <Routes>
        <Route path="/" element={<HomePageWrapper />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/detail/:id" element={<DetailPageWrapper />} />
        </Routes>
      </main>
    </div>
    </ThemeProvider>

  )
}
}
 
export default App;