import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import TripDetail from './pages/TripDetail'
import Pay from './pages/Pay'
import Profile from './pages/Profile'
import Transaction from './pages/Transaction'
import Trip from './pages/Trip'
import TripAdd from './pages/TripAdd'
import PayPending from './pages/PayPending'
import Footer from "./components/section/Footer";
import './App.css'
import LoginContext from './context/LoginContext'
import PrivateRoute from './helpers/PrivateRoute'
import AdminRoute from './helpers/AdminRoute'

function App() {

  const [loginData, setLoginData] = useState({
    isLogin: false,
    token: "",
    role: "user"
  })
  return (
    <>
    <LoginContext.Provider value={{loginData, setLoginData}}>
    <Router>
      <Switch>
        {/* private route user */}
        <PrivateRoute path="/pay/:id" component={PayPending} />
        <PrivateRoute path="/pay" component={Pay} />
        <PrivateRoute path="/profile" component={Profile} />
        {/* admin route */}
        <AdminRoute  path="/transaction" component={Transaction} />
        <AdminRoute  path="/trip/add" component={TripAdd} />
        <AdminRoute  path="/trip" component={Trip} />
        {/* guest route */}
        <Route path="/detail-trip/:id">
          <TripDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    <Footer />
    </LoginContext.Provider>
    </>
  );
}

export default App;