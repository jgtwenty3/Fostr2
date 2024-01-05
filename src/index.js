import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import AddAnimalForm from './AddAnimalForm.js';
import DogContainer from './DogContainer.js';
import FostrFriends from './FostrFriends.js';
import DogCard from './DogCard.js';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/add-animal',
    element: <AddAnimalForm />
  },
  {
    path:'./animal-information',
    element: <DogContainer />
  },
  {
    path: '/fostr-friends',
    element: <FostrFriends />
  },
  {
    path: "/dogs/:id",
    element: <DogCard />
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);