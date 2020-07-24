import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import Home from './components/pages/Home';
import Navbar from './components/layouts/Navbar';
import ViewPet from './components/pets/ViewPet';

//load token into global headers. Private route.
if(localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Navbar title="Pet Adoption" />
          <div>
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/pets/:id' component={ViewPet} />
            </Switch>
          </div>
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
