import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/Navbar';

export const MainLayout: FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
