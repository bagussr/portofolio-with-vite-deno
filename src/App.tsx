import React, { useState, FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';
import { MainLayout } from './layout/MainLayout';

function App(): FC {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
