// import logo from './logo.svg';
import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Login from "./Login";
import Checkout from "./Checkout";


import { useStateValue } from "./StateProvider";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";


function App() {

  const [{}, dispatch] = useStateValue();

  // useEffect(() => {
  //   // will only run once when the app component loads...

  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("THE USER IS >>> ", authUser);

  //     if (authUser) {
  //       // the user just logged in / the user was logged in

  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       // the user is logged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);


  return (
    <Router>
      <div className="app">
      <Routes>

        <Route path="/checkout" element={<><Header/><Checkout/></>}>
        </Route>

        <Route path="/login" element={<Login/>}>
        </Route>

        <Route path="/" element={<><Header/><Home/></>}>
        </Route>

      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
