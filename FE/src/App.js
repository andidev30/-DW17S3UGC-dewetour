import React from 'react'
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
// import ImgLeft from "./components/img/global/left.png";
// import ImgRight from "./components/img/global/right.png";
import LoginContext from './context/LoginContext'

function App() {
  const status = {
    isLoggedIn: true,
    role: false
  }
  return (
    <>
    <LoginContext.Provider value={status}>
    {/* <img src={ImgLeft} className="img-left" alt="left" />
    <img src={ImgRight} className="img-right" alt="right" /> */}
    <Router>
      <Switch>
        <Route path="/pay-pending">
          <PayPending />
        </Route>
        <Route path="/trip/add">
          <TripAdd />
        </Route>
        <Route path="/trip">
          <Trip />
        </Route>
        <Route path="/detail-trip">
          <TripDetail />
        </Route>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/transaction">
          <Transaction />
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