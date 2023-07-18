// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Login from "./Login";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
      <Routes>
        <Route path="/checkout" element={<><Header/><Checkout/></>}>
          {/* <h1>Checkout</h1> */}
        </Route>
        <Route path="/login" element={<Login/>}>
          {/* <h1>Login</h1> */}
        </Route>
        <Route path="/orders" element={<Header/>}>
          {/* <h1>Checkout</h1> */}
        </Route>
        <Route path="/" element={<><Header/><Home/></>}>
        </Route>
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
