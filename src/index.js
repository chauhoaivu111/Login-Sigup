import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss'
import App from './App';
import { SnackbarProvider } from 'notistack';
ReactDOM.render(
 <React.StrictMode>
   <SnackbarProvider maxSnack={2}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',  
  }}
  className="rendererror"
 >
    <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


