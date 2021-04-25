import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker'
import { GithubProvider} from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'

// dev-z5s7o2pz.us.auth0.com
// VsCjBtcWLlyppjPelt4fEazt0IlAgD5w
ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
  domain= "dev-z5s7o2pz.us.auth0.com"
    clientId="VsCjBtcWLlyppjPelt4fEazt0IlAgD5w"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
    >
  <GithubProvider>
   <App />
   </GithubProvider>
   </Auth0Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

//serviceWorker.unregister();