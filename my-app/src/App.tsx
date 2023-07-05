import React from 'react';
import { Header } from './components/header';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Shops } from './components/shops';
import { Main } from './components/main';
import { Cards } from './components/productCard';
function App() {
  return (
    <>
  
    <div className="App">
<Header/>
 <Main/>
      <Routes>
      <Route path='/shops' element={<Shops/>}/>
      <Route path='/:id' element={<Cards/>}/>
    </Routes>
    
    </div>

    </>
  );
}

export default App;
