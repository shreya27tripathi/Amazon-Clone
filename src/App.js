// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
function App() {
  return (
    <Router>
      <div className="app">
      <Routes>
        <Route path="/checkout">
          {/* <h1>Checkout</h1> */}
        </Route>
        <Route path="/login">
          {/* <h1>Login</h1> */}
        </Route>
        <Route path="/" element={<Header/>} >
        </Route>
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
