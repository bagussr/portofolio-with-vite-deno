// @deno-types="https://denopkg.com/soremwar/deno_types/react/v16.13.1/react.d.ts"
import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';
import { MainLayout } from './layout/MainLayout';
import { About } from './page/About';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
