import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const userContext = createContext();
export const vehiclesContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [vehicles, setVehicles] = useState('');

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <vehiclesContext.Provider value={[vehicles, setVehicles]}>
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/contact'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/destination'>
              <Destination vehicles={vehicles} />
            </PrivateRoute>

          </Switch>
        </vehiclesContext.Provider>
      </Router>
    </userContext.Provider>
  );
}

export default App;