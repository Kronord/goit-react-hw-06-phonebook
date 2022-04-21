import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'components/Redux/Store';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>  
      <App />
       </PersistGate>
    </Provider>
  </React.StrictMode>,
);


