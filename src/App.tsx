import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';
import { MainLayout } from './layout/MainLayout';
import { About } from './page/About';
import { Contact } from './page/Contact';
import { Gallery } from './page/Gallery';
import { Project } from './page/project/Project';

function App(): FC {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='project' element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
