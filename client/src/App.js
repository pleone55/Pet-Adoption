import React from 'react';
import Login from './components/auth/Login';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Provider store={store}>
      <>
        <Login />
      </>
    </Provider>
  );
}

export default App;
