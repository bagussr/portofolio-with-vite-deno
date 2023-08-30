// @deno-types=@types/react
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';
import { MainLayout } from './layout/MainLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
