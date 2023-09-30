import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSetup from './components/login-page/layout';
import Layout from './components/home-page/layout';

function App() {
  const place = require('./components/home-page/header')
  return (
    <div className=' top'>
      <BrowserRouter>     
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <Layout />
              </div>              
            }
            />
            <Route path = '/login'
            element={
              <div>
                <LoginSetup/>
              </div>
            }/>
          </Routes>      
      </BrowserRouter>
      
      
      
      
    </div>
    
  );
}

export default App;
