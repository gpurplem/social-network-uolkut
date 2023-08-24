import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/profile', element: <Profile /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;