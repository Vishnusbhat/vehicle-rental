import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSetup from './components/login-page/layout';
import Layout from './components/home-page/layout';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('0');

  return (
    <div className=' top'>
      <BrowserRouter>     
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Layout user={user}/>
              </div>              
            }
            />
            <Route path = '/login'
            element={
              <div>
                <LoginSetup user = {user} setUser = {setUser}/>
                
              </div>
            }/>
          </Routes>      
      </BrowserRouter>
      
      
      
      
    </div>
    
  );
}

export default App;
