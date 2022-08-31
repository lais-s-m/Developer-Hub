import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Routes } from './routes';

export function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            border: '2px solid #FF577F',
            padding: '16px',
            color: '#F8F9FA',
            backgroundColor: '#59323F',
          },
        }}
      />
      <Routes />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  );
}
