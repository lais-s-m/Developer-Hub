import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { RoutesContextProvider } from './contexts/RoutesContext';
import { UserProvider } from './contexts/UserContext';
import GlobalStyles from './styles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <UserProvider>
        <RoutesContextProvider>
          <App />
        </RoutesContextProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
