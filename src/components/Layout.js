import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <div style={{ margin: '0', padding: '0' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
