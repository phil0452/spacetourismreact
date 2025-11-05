import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Navigate } from "react-router-dom";
import App from './App.jsx';
import Home from './components/Home.jsx';
import Destination from './components/Destination/Destination.jsx';
import Planets from './components/Destination/Planets.jsx';
import Crew from './components/Crew.jsx';
import Technology from './components/Technology.jsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<App />}>

      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="destination" element={<Destination />} >
      {/* allows the developer to load 2 parts to a single page,
      here its the title and destination data. */}

        <Route index element={<Navigate to="moon" replace />} />
        <Route path=":planet" element={<Planets />} />
      </Route>
      <Route path="crew" element={<Crew />} />
      <Route path="technology" element={<Technology />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
