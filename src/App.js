import React, { useState,useEffect } from 'react';
import Switch from "react-switch";
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import AddPage from './Pages/add-new-page';
import DetailPageWrapper from './Pages/detail-page';
import LoginPage from './Pages/LoginPage';
import { putAccessToken,getUserLogged } from './utils/api';
import Register from './Pages/Register';
import HomePageWrapper from './Pages/Homepage';
import { ThemeProvider } from './CustomHook/ThemeContext';







 
 
function App() {
  const [authedUser,setauthedUser] = useState(null);

  const [mode, setMode] = useState('dark')
  
  const toggleMode = () => {
  setMode((mode) => 
  (mode === 'light' ? 'dark' : 'light'));
  }
  // useEffect((prevMode) => {
  //   if (prevMode !== mode) {
  //     document.documentElement.setAttribute('data-theme', mode);
  //   }
  // },);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  }, [mode]);
  
useEffect(() => { 
    const { data } =getUserLogged();
    setauthedUser(data)
  }, [mode]  );


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
        <h1>Aplikasi Catatan</h1>
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
    <ThemeProvider value={mode}>
    <div className="app-container" id={mode}>
      <header >
        <h1>Aplikasi Catatan</h1>
        <Navigation logout={onLogout}/>
        <Switch onChange={toggleMode} checked={mode==="dark"} />

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